import { Box, Container } from "@mui/material";
export default function CurrentDateTime() {
  return (
    <Box sx={{ left: 0, right: 0, margin: "150px 0 8px 0" }}>
      <Container maxWidth="lg" sx={{ fontSize: ".8rem", color: "grey.700" }}>
        30 MAY 2024 | 21:59:26 GMT+7
      </Container>
    </Box>
  );
}
