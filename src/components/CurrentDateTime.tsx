"use client";
import { Box, Container } from "@mui/material";
import { useState, useEffect } from "react";

export default function CurrentDateTime() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, [date]);
  return (
    <Box sx={{ left: 0, right: 0, margin: "150px 0 8px 0" }}>
      <Container maxWidth="lg" sx={{ fontSize: ".8rem", color: "grey.700" }}>
        <time suppressHydrationWarning>{`${date}`}</time>
      </Container>
    </Box>
  );
}
