import React from "react";
import { Typography, Skeleton } from "@mui/material";
import { styled } from "@mui/material/styles";
import GamesCard from "./GamesCard";

const Games = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  // justifyContent: 'center'
}));

const commonCardStyles = {
  margin: "7px",
  width: {
    xs: "46%",
    sm: "30.2%",
    md: "23%",
    // xl: "25%"
  },
  height: {
    xs: "230px",
    sm: "220px",
    md: "300px",
  },
  borderRadius: "5px",
};

const commonImgStyles = {
  height: {
    xs: "150px",
    sm: "140px",
    md: "220px",
  },
};

const GamesContainer = ({ games }) => {
  const renderGamesCard = () => {
    if (games.loading || !games.data?.results?.length) {
      if (games.data.results?.length === 0)
        return <Typography>Data Not Found</Typography>;

      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12].map((data) => (
        <Skeleton
          key={data}
          variant="rectangular"
          sx={{
            ...commonCardStyles,
            height: "300px",
          }}
        />
      ));
    } else {
      return games.data.results.map((game) => (
        <GamesCard
          game={game}
          key={game.id}
          sx={{
            ...commonCardStyles,
          }}
          imgSx={{
            ...commonImgStyles,
          }}
        />
      ));
    }
  };
  return <Games>{renderGamesCard()}</Games>;
};

export default GamesContainer;
