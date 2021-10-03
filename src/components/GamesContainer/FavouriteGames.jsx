import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import GamesCard from "./GamesCard";
import * as appColor from "../../settings/appColor"

const Games = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  // justifyContent: 'center'
}));

const IconText = styled('span')(
  ({theme})=> ({
    fontSize: '2em',
    fontWeight: 'bold',
    color: appColor.primaryYellow,
  })
)

const commonCardStyles = {
  margin: "7px",
  width: {
    xs: "45%",
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

const FavouriteGames = ({ games }) => {
  const renderGamesCard = () => {
    if (games === null || games.length === 0) {
      return <Typography sx={{
        width: '100%', 
        textAlign: 'center',
        marginTop: 2
      }}><IconText>Oops...</IconText> you have no favourite games yet</Typography>;
    } else {
      return games.map((game) => (
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

export default FavouriteGames;
