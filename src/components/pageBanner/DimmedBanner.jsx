import React from "react";
import { styled } from "@mui/material/styles";
import { Typography, Rating, Skeleton } from "@mui/material";
import PlatformImgList from "../platformImgList/PlatformImgList";
import { listPublishersName } from "../../function/listPublishersName";

const DimmedBannerContainer = styled("div")(({ theme }) => ({
  height: '300px',
  width: "100%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  borderRadius: "10px",
  overflow: "hidden",
  position: "relative",

  "& .contentContainer": {
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0, 0.8)",
    "& .content": {
      padding: "1em",
      // position: 'relative'
    },
  },
}));

const PlatformListContainer = styled("div")(({ theme }) => ({}));

const DimmedBanner = ({ gameDetail, sx }) => {
  // console.log(gameDetail.background_image);
  const renderBanner = (gameDetailToRender) => {
    if (
      gameDetailToRender.loading ||
      Object.keys(gameDetailToRender.data).length === 0
    ) {
      return (
        <Skeleton
          variant="rectangular"
          sx={{
            height: "300px",
            width: "100%",
            borderRadius: '10px',
            ...sx
          }}
        />
      );
    } else {
      return (
        <DimmedBannerContainer
          sx={{
            backgroundImage: `url(${gameDetailToRender.data.background_image})`,
            ...sx
          }}
        >
          <div className="contentContainer">
            <div className="content">
              <Typography
                sx={{
                  fontSize: {
                    xs: '1.5em',
                    sm: '2em',
                    md: '3em'
                  },
                  fontWeight: "bold",
                  // lineHeight: '1em'

                }}
              >
                {gameDetailToRender.data.name}
              </Typography>
              <Rating value={gameDetailToRender.data.rating} precision={0.1} />
              <Typography
                sx={{ marginTop: 1 }}
              >{`Publishers : ${listPublishersName(
                gameDetailToRender.data.publishers
              )}`}</Typography>
              <PlatformListContainer
                sx={{
                  position: "absolute",
                  bottom: "10px",
                  display: {
                    sm: 'flex'
                  },
                  alignItems: 'center'
                }}
              >
                <Typography sx={{
                  fontWeight: 'bold',
                  marginRight: '10px'
                }}>Available on :</Typography>
                <PlatformImgList
                  parentPlatforms={gameDetailToRender.data.parent_platforms}
                />
              </PlatformListContainer>
            </div>
          </div>
        </DimmedBannerContainer>
      );
    }
  };

  return <>{renderBanner(gameDetail)}</>;
};

export default DimmedBanner;
