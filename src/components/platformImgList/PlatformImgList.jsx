import React from "react";
import { styled } from "@mui/material/styles";
import { selectPlatformImg } from "../../function/selectPlatformImg";

const PlatformContainer = styled("div")(({ theme }) => ({}));

const PlatformImg = styled("img")(({ theme }) => ({
  height: "20px",
  marginRight: '10px'
}));

const PlatformImgList = ({ parentPlatforms, sx }) => {
  const renderPlatformImg = (platforms) => {
    return platforms.map((platform) => (
      <PlatformImg key={platform.platform.id} src={selectPlatformImg(platform.platform.id)} />
    ));
  };
  return (
    <PlatformContainer sx={sx}>
      {renderPlatformImg(parentPlatforms)}
    </PlatformContainer>
  );
};

export default PlatformImgList;
