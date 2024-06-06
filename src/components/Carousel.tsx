import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, MobileStepper, Paper, Typography, Button } from "@mui/material";
import {
  BorderAllRounded,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "@mui/icons-material";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Post } from "@/utils/helper";
import Image from "next/image";
import { cnnNews } from "@/constant/cnn";

const AutoPlaySwipeableViews: any = autoPlay(SwipeableViews);
const posts: Post[] = cnnNews.articles;
// const posts: Post[] = [
//   {
//     source: {
//       id: 1,
//       name: "Gizmodo.com",
//     },
//     author: "Vinamrata Chaturvedi, Quartz",
//     title: "Everything to Know About Bitcoin Pizza Day",
//     description:
//       "On May 22, 2010, a man in Florida paid 10,000 Bitcoin for pizza.Read more...",
//     url: "https://gizmodo.com/bitcoin-pizza-day-date-origin-history-cryptocurrency-1851487831",
//     urlToImage:
//       "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
//     publishedAt: "2024-05-20T13:20:00Z",
//     content:
//       "On January 3, 2009, Bitcoins creator, Satoshi Nakamoto, mined the first block of the Bitcoin blockchain, known as the Genesis Block, which contained a reward of 50 Bitcoin. The technical foundations … [+1156 chars]",
//   },
//   {
//     source: {
//       id: 2,
//       name: "Gizmodo2.com",
//     },
//     author: "22Vinamrata Chaturvedi, Quartz",
//     title: "22Everything to Know About Bitcoin Pizza Day",
//     description:
//       "22On May 22, 2010, a man in Florida paid 10,000 Bitcoin for pizza.Read more...",
//     url: "https://gizmodo.com/bitcoin-pizza-day-date-origin-history-cryptocurrency-1851487831",
//     urlToImage:
//       "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
//     publishedAt: "2024-05-20T13:20:00Z",
//     content:
//       "22On January 3, 2009, Bitcoins creator, Satoshi Nakamoto, mined the first block of the Bitcoin blockchain, known as the Genesis Block, which contained a reward of 50 Bitcoin. The technical foundations … [+1156 chars]",
//   },
//   {
//     source: {
//       id: 3,
//       name: "Gizmodo3.com",
//     },
//     author: "33Vinamrata Chaturvedi, Quartz",
//     title: "33Everything to Know About Bitcoin Pizza Day",
//     description:
//       "33On May 22, 2010, a man in Florida paid 10,000 Bitcoin for pizza.Read more...",
//     url: "https://gizmodo.com/bitcoin-pizza-day-date-origin-history-cryptocurrency-1851487831",
//     urlToImage:
//       "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
//     publishedAt: "2024-05-20T13:20:00Z",
//     content:
//       "33On January 3, 2009, Bitcoins creator, Satoshi Nakamoto, mined the first block of the Bitcoin blockchain, known as the Genesis Block, which contained a reward of 50 Bitcoin. The technical foundations … [+1156 chars]",
//   },
//   {
//     source: {
//       id: 4,
//       name: "Gizmodo4.com",
//     },
//     author: "44Vinamrata Chaturvedi, Quartz",
//     title: "44Everything to Know About Bitcoin Pizza Day",
//     description:
//       "44On May 22, 2010, a man in Florida paid 10,000 Bitcoin for pizza.Read more...",
//     url: "https://gizmodo.com/bitcoin-pizza-day-date-origin-history-cryptocurrency-1851487831",
//     urlToImage:
//       "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
//     publishedAt: "2024-05-20T13:20:00Z",
//     content:
//       "44On January 3, 2009, Bitcoins creator, Satoshi Nakamoto, mined the first block of the Bitcoin blockchain, known as the Genesis Block, which contained a reward of 50 Bitcoin. The technical foundations … [+1156 chars]",
//   },
// ];

function CarouselStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = posts.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{}}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {posts.map((step, index) => (
          <Box key={step.title}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                src={step.urlToImage}
                alt={step.title}
                sx={{
                  display: "block",
                  // objectFit: "contain",.
                  height: 450,
                  maxWidth: 800,
                  overflow: "hidden",
                  width: "100%",
                  borderRadius: 5,
                }}
              />
            ) : null}
          </Box>
        ))}
      </AutoPlaySwipeableViews>
      <Typography sx={{ pl: 5, bgcolor: "background.default" }}>
        {posts[activeStep].title}
      </Typography>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
    </Box>
  );
}

export default CarouselStepper;
