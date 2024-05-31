const fetchNewsEverything = async (query?: string) => {
  const api_key = process.env.NEXT_PUBLIC_NEW_API_KEY;
  const authHeader = new Headers();
  api_key && authHeader.append("Authorization", api_key);

  const requestOptions = {
    method: "GET",
    headers: authHeader, //if need auth from header
  };

  const params =
    query &&
    new URLSearchParams({
      q: query,
      // from: "2024-05-28",
      // to: "2024-05-28",
      // sortBy: "popularity",
      // pageSize: "10",
    });

  // console.log("what query data have:", query ? query : "");

  // const url = `https://newsapi.org/v2/everything?q=${params}`;
  const url = params
    ? `${process.env.NEXT_PUBLIC_NEWS_URL}/posts`
    : `${process.env.NEXT_PUBLIC_NEWS_URL}/posts`;

  const res = await fetch(url, requestOptions);
  return await res.json();
};

export default fetchNewsEverything;
