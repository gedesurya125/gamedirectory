import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getGameDetailAction } from "../../redux/actions/gameDetailAction";
import DimmedBanner from "../../components/pageBanner/DimmedBanner";
import { styled } from "@mui/material/styles";
import PageTitle from "../../components/pageTitle/PageTitle";
import PhotoSection from "../../components/photoSection/PhotoSection";
import Description from "../../components/description/Description";
import Tags from "../../components/tags/Tags";
import { Button, Skeleton } from "@mui/material";
import * as appColor from "../../settings/appColor";
import useLocalStorage, {
  FAVOURITE_GAMES,
} from "../../function/useLocalStorage";

const GameDetailContainer = styled("div")(({ theme }) => ({}));
const ButtonDiv = styled("div")(({ theme }) => ({
  textAlign: "center",
}));
// const Description = styled("div")(({ theme }) => ({}));

const TitleSection = ({ children, lineSx }) => (
  <PageTitle
    leftLine={false}
    sx={{
      // padding: "0 0.5em 0 0",
      fontFamily: "roboto",
      fontSize: "2em",
      textTransform: "none",
      // color: "white",
    }}
    lineSx={{
      // backgroundColor: "white",
      height: "3px",
      ...lineSx,
    }}
  >
    {children}
  </PageTitle>
);

const GameDetail = () => {
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(false);
  const myLocalStorage = useLocalStorage();
  const params = useParams();
  const gameDetail = useSelector((state) => state.gameDetail);
  // console.log(gameDetail);

  const handleClickFavouriteButton = () => {
    myLocalStorage.addStorageItem(gameDetail.data, FAVOURITE_GAMES);
    setLiked(true);
  };

  const handleClickRemoveFavouriteButton = () => {
    myLocalStorage.deleteStorateItem(gameDetail.data.id, FAVOURITE_GAMES);
    setLiked(false);
  };

  useEffect(() => {
    dispatch(getGameDetailAction(params.id));
  }, [dispatch, params.id]);

  useEffect(() => {
    const myFavouriteGames = myLocalStorage.getAllDataStorage(FAVOURITE_GAMES);
    if (
      myFavouriteGames !== null &&
      myFavouriteGames.find((data) => data.id === gameDetail.data.id)
    ) {
      setLiked(true);
    }
    return () => {
      setLiked(false);
    };
  }, [gameDetail.data.id, myLocalStorage]);

  useEffect(() => {}, []);
  return (
    <GameDetailContainer>
      <DimmedBanner sx={{ marginBottom: "20px" }} gameDetail={gameDetail} />
      <ButtonDiv>
        {gameDetail.loading ? (
          <Skeleton
            sx={{
              height: "56px",
              width: "160px",
              margin: "-10px auto",
            }}
          />
        ) : (
          <>
            <Button
              variant="outlined"
              disabled={liked}
              onClick={handleClickFavouriteButton}
              sx={{
                display: liked ? "none" : "inline-block",
                color: appColor.primaryYellow,
                border: `1px solid ${appColor.primaryYellow}`,
                "&:hover": {
                  border: `1px solid ${appColor.primaryYellow}`,
                },
              }}
            >
              Add To Favourite
            </Button>
            <Button
              variant="outlined"
              disabled={!liked}
              onClick={handleClickRemoveFavouriteButton}
              sx={{
                display: !liked ? "none" : "inline-block",
                color: "red",
                border: `1px solid ${"red"}`,
                "&:hover": {
                  border: `1px solid ${"red"}`,
                },
              }}
            >
              Remove From Favourite
            </Button>
          </>
        )}
      </ButtonDiv>
      <TitleSection>Description</TitleSection>
      <Description text={null} innerHTML={gameDetail.data.description} />
      <PhotoSection
        src={gameDetail.data.background_image_additional}
        loading={gameDetail.loading}
      />
      <TitleSection lineSx={{ marginBottom: "20px" }} />
      <Tags
        title="Genres :"
        tags={gameDetail.data.genres}
        loading={gameDetail.loading}
      />
      <Tags
        title="Tags :"
        tags={gameDetail.data.tags}
        loading={gameDetail.loading}
      />
    </GameDetailContainer>
  );
};

export default GameDetail;
