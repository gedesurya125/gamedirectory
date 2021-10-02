import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getGameDetailAction } from "../../redux/actions/gameDetailAction";
import DimmedBanner from "../../components/pageBanner/DimmedBanner";
import { styled } from "@mui/material/styles";
import PageTitle from "../../components/pageTitle/PageTitle";
import PhotoSection from "../../components/photoSection/PhotoSection";
import Description from "../../components/description/Description";
import Tags from "../../components/tags/Tags";

const GameDetailContainer = styled("div")(({ theme }) => ({}));

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
      ...lineSx
    }}
  >
    {children}
  </PageTitle>
);

const GameDetail = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const gameDetail = useSelector((state) => state.gameDetail);
  // console.log(gameDetail);

  useEffect(() => {
    dispatch(getGameDetailAction(params.id));
  }, [dispatch, params.id]);

  return (
    <GameDetailContainer>
      <DimmedBanner sx={{ marginBottom: "20px" }} gameDetail={gameDetail} />
      <TitleSection>Description</TitleSection>
      <Description text={null} innerHTML={gameDetail.data.description} />
      <PhotoSection src={gameDetail.data.background_image_additional} loading={gameDetail.loading}/>
      <TitleSection lineSx={{marginBottom: '20px'}}/>
      <Tags title="Genres :" tags={gameDetail.data.genres} loading={gameDetail.loading}/>
      <Tags title="Tags :" tags={gameDetail.data.tags} loading={gameDetail.loading}/>
    </GameDetailContainer>
  );
};

export default GameDetail;
