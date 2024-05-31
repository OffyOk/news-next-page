import { Box, Stack } from "@mui/material";
import CarouselStepper from "./Carousel";
import NewsCard from "./news/NewsCard";
import { Post } from "@/utils/helper";
import NewsSideRecently from "@/components/news/NewsSideRecently";

const testData: Post = {
  source: {
    id: null,
    name: "Gizmodo.com",
  },
  author: "Vinamrata Chaturvedi, Quartz",
  title: "Everything to Know About Bitcoin Pizza Day",
  description:
    "On May 22, 2010, a man in Florida paid 10,000 Bitcoin for pizza.Read more...",
  url: "https://gizmodo.com/bitcoin-pizza-day-date-origin-history-cryptocurrency-1851487831",
  urlToImage:
    "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  publishedAt: "2024-05-20T13:20:00Z",
  content:
    "On January 3, 2009, Bitcoins creator, Satoshi Nakamoto, mined the first block of the Bitcoin blockchain, known as the Genesis Block, which contained a reward of 50 Bitcoin. The technical foundations … [+1156 chars]",
};

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
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <NewsCard post={testData} />
          <NewsCard post={testData} />
          <NewsCard post={testData} />
          <NewsCard post={testData} />
        </Box>
      </Box>
      <Box sx={{ flexGrow: "1" }}>
        <NewsSideRecently />
      </Box>
    </Box>
  );
}
