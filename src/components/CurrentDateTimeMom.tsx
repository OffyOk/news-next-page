import { Box, Container } from "@mui/material";
import moment from "moment";

export default function CurrentDateTimeMom() {
  const fullCurrentTime = moment().format("dddd, MMM Do YYYY, HH:mm");
  return (
    <Box sx={{ left: 0, right: 0, margin: "150px 0 8px 0" }}>
      <Container maxWidth="lg" sx={{ fontSize: ".8rem", color: "grey.700" }}>
        <time suppressHydrationWarning>{fullCurrentTime}</time>
      </Container>
    </Box>
  );
}
