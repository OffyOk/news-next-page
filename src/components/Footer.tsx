import { Box, Container, Typography } from "@mui/material";
import { LinkedIn, GitHub } from "@mui/icons-material";
import Link from "next/link";

export default function Footer() {
  return (
    <Box
      sx={{
        zIndex: "1000",
        bgcolor: "var(--primary)",
        position: "fixed",
        bottom: "0",
        left: "0",
        right: "0",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          noWrap
          sx={{
            // mr: 2,
            fontFamily: "monospace",
            fontWeight: 700,
            fontSize: "1rem",
            letterSpacing: ".2rem",
            color: "white",
            textDecoration: "none",
          }}
        >
          CODED BY OFFYOK
        </Typography>
        <Box style={{ display: "flex", alignItems: "center" }}>
          <Link
            href="https://www.linkedin.com/in/suthichai-srivatanasup/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn
              sx={{ color: "white", marginRight: "5px", fontSize: "41px" }}
            />
          </Link>
          <Link
            href="https://github.com/OffyOk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub sx={{ color: "white", fontSize: "35px" }} />
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
