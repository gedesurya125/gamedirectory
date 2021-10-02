import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Rating } from "@mui/material";
import { useHistory } from "react-router-dom";

const GamesCard = ({ game, sx, imgSx }) => {
  const history = useHistory();
  //results
  return (
    <Card sx={{ ...sx }}>
      <CardActionArea onClick={() => history.push(`/game/detail/${game.id}`)}>
        <CardMedia
          component="img"
          image={game.background_image}
          alt="green iguana"
          sx={{
            ...imgSx
          }}
        />
        <CardActions disableSpacing>
          <Rating precision={0.1} value={game.rating} readOnly />
          {/* {game.rating} */}
        </CardActions>
        <CardContent
          sx={{
            padding: "1px 8px",
          }}
        >
          <Typography gutterBottom variant="h6" noWrap>
            {game.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default GamesCard;
