import { useQuery } from "@tanstack/react-query";
import fetchNewsEverything from "@/lib/fetchNewsEverything";
import { Alert, AlertTitle, Box } from "@mui/material";

const NewsEverything = ({ slug }: any) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData", slug],
    queryFn: () => fetchNewsEverything(slug),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <Box>
      <ul>
        {!Array.isArray(data.articles) ? (
          <Box
            style={{
              minHeight: "500px",
              display: "grid",
              placeContent: "center",
            }}
          >
            <Alert severity="error" sx={{ maxWidth: "30rem" }}>
              <AlertTitle>
                {data.status} : {data.code}
              </AlertTitle>
              {data.message}
            </Alert>
          </Box>
        ) : (
          data.articles.map((article: { title: string }) => (
            <li key={article.title}>{article.title}</li>
          ))
        )}
      </ul>
    </Box>
  );
};

export default NewsEverything;
