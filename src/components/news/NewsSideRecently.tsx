import { Box, Typography, colors } from "@mui/material";
import { Post } from "@/utils/helper";
import { bbcNews } from "@/constant/bcc-news";
import { Badge } from "@mui/material";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import moment from "moment";
const posts: Post[] = bbcNews.articles;

export default function NewsSideRecently(): JSX.Element {
  return (
    <Box>
      <Typography variant="h4" fontWeight={600}>
        Most Recent
      </Typography>
      <Box
        sx={{
          border: "3",
          borderColor: "text.primary",
          display: "flex",
          //   justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {posts.map(
          (post: Post, index: number) =>
            index < 5 && (
              <Box key={index} sx={{ marginY: "8px" }}>
                <Badge
                  sx={{ color: "gray", fontSize: ".8rem", marginBottom: "4px" }}
                >
                  {moment(post.publishedAt).format("HH:mm")}
                </Badge>
                <Typography fontWeight={700}>{post.title}</Typography>
              </Box>
            )
        )}
      </Box>
    </Box>
  );
}
