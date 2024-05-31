import { Button, Stack, Typography } from "@mui/material";
import basket from "./basket";
import { useState, useEffect } from "react";

interface Items {
  type: string;
  name: string;
}

export default function FruitVeget() {
  const [basketList, setBasketList] = useState<Items[]>(basket);
  const [fruit, setFruit] = useState<Items[]>([]);
  const [vegetable, setVegetable] = useState<Items[]>([]);

  useEffect(() => {
    const timers: { [key: string]: NodeJS.Timeout } = {};

    fruit.forEach((item: Items) => {
      timers[item.name] = setTimeout(() => {
        moveItemBackToBasket(item, "fruit");
      }, 2000);
    });

    vegetable.forEach((item: Items) => {
      timers[item.name] = setTimeout(() => {
        moveItemBackToBasket(item, "vegetable");
      }, 2000);
    });

    return () => {
      Object.values(timers).forEach(clearTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fruit, vegetable]);

  const moveItemToColumn = (item: Items) => {
    setBasketList(basketList.filter((i) => i.name !== item.name));
    if (item.type === "Fruit") {
      setFruit([...fruit, item]);
    } else {
      setVegetable([...vegetable, item]);
    }
  };

  const moveItemBackToBasket = (item: Items, fromColumn: string) => {
    if (fromColumn === "fruit") {
      setFruit(fruit.filter((i) => i.name !== item.name));
    } else {
      setVegetable(vegetable.filter((i) => i.name !== item.name));
    }
    setBasketList([...basketList, item]);
  };

  return (
    <Stack direction="row" spacing={2} justifyContent="center">
      <Stack direction="column" width={300} spacing={1}>
        <Typography
          variant="h6"
          sx={{
            // mr: 2,
            fontFamily: "monospace",
            fontWeight: "700",
            textDecoration: "none",
            color: "black",
            textAlign: "center",
          }}
        >
          Basket
        </Typography>
        {basketList.map((item) => (
          <Button
            key={item.name}
            onClick={() => moveItemToColumn(item)}
            variant="outlined"
          >
            {item.name}
          </Button>
        ))}
      </Stack>
      <Stack direction="column" width={300} spacing={2}>
        <Typography
          variant="h6"
          sx={{
            // mr: 2,
            fontFamily: "monospace",
            fontWeight: "700",
            textDecoration: "none",
            color: "black",
            textAlign: "center",
          }}
        >
          Fruit
        </Typography>
        {fruit.map((item) => (
          <Button
            key={item.name}
            onClick={() => moveItemBackToBasket(item, "fruit")}
            variant="contained"
            color="success"
          >
            {item.name}
          </Button>
        ))}
      </Stack>
      <Stack direction="column" width={300} spacing={2}>
        <Typography
          variant="h6"
          sx={{
            // mr: 2,
            fontFamily: "monospace",
            fontWeight: "700",
            textDecoration: "none",
            color: "black",
            textAlign: "center",
          }}
        >
          Vegetable
        </Typography>
        {vegetable.map((item) => (
          <Button
            key={item.name}
            onClick={() => moveItemBackToBasket(item, "vegetable")}
            variant="contained"
            color="error"
          >
            {item.name}
          </Button>
        ))}
      </Stack>
    </Stack>
  );
}
