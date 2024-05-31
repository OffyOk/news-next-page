import { useQuery } from "@tanstack/react-query";
import fetchNewsEverything from "@/lib/fetchNewsEverything";
import type { Post } from "@/utils/helper";
import { Box } from "@mui/material";

const NewsPage = ({ slug }: any) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData", slug],
    queryFn: () => fetchNewsEverything(),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  console.log(data);
  return (
    <Box>
      <ul>
        {data.map((post: Post) => (
          <li key={post.title}>{post.title}</li>
        ))}
      </ul>
    </Box>
  );
};

export default NewsPage;
