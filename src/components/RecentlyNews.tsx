import { Box, Stack } from "@mui/material";
import CarouselStepper from "./Carousel";
import NewsCard from "./news/NewsCard";
import { Post } from "@/utils/helper";
import NewsSideRecently from "@/components/news/NewsSideRecently";
import { bbcNews } from "@/constant/bcc-news";
const posts: Post[] = bbcNews.articles;

export default function RecentlyNews() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: "1rem",
      }}
    >
      <Box sx={{ width: "70%" }}>
        <CarouselStepper />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            overflowX: "auto",
          }}
        >
          {" "}
          {posts.map((post: Post, index: number) => (
            <NewsCard key={index} post={post} />
          ))}
        </Box>
      </Box>
      <Box sx={{ flexGrow: "1" }}>
        <NewsSideRecently />
      </Box>
    </Box>
  );
}
