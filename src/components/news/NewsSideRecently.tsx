import { Box, Typography } from "@mui/material";
import NewsCard from "./NewsCard";

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
        <Box>test</Box>
        <Box>test</Box>
        <Box>test</Box>
        <Box>test</Box>
        <Box>test</Box>
        <Box>test</Box>
      </Box>
    </Box>
  );
}
