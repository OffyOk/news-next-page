import * as React from "react";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import Image from "next/image";
import { Post } from "@/utils/helper";
import { Badge } from "@mui/material";

// props = {post}
// post = props.post
// {post} = props
export default function NewsCard({ post }: { post: Post }) {
  return (
    <Card sx={{ minHeight: "280px", width: 320 }}>
      <CardCover>
        {post.urlToImage && (
          <Image
            src={post.urlToImage}
            // srcSet="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320&dpr=2 2x"
            loading="lazy"
            width={320}
            height={180}
            alt={`this image about ${post.title}`}
          />
        )}
      </CardCover>
      <CardCover
        sx={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
        }}
      />
      <CardContent sx={{ justifyContent: "flex-end" }}>
        <Badge>{post.publishedAt}</Badge>

        <Typography
          startDecorator={<LocationOnRoundedIcon />}
          textColor="neutral.300"
        >
          {post.title}
        </Typography>
      </CardContent>
    </Card>
  );
}
