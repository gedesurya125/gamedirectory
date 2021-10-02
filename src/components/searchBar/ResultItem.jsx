import React from "react";
import { styled, Typography } from "@mui/material";
import PlatformImgList from "../platformImgList/PlatformImgList";
import { useHistory } from "react-router-dom";

const ResultItemContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  borderRadius: "10px",
  padding: '10px',
  marginBottom: '10px',
  '&:hover':{
    background: 'rgba(255,255,255, 0.1)',
    cursor: 'pointer'
  }
}));
const ResultImg = styled("img")(({ theme }) => ({
  width: "100px",
  height: "80px",
  objectFit: "cover",
  borderRadius: "5px",
  marginRight: "20px",
}));
const ResultItem = ({ resultId, handleClearPattern, image, name, parentPlatforms }) => {
  const history = useHistory();
  // console.log('INI PLATFORMNYA',parentPlatforms)

  const handleItemClick = (gameId, clearInputPattern) =>{
    history.push(`/game/detail/${gameId}`);
    clearInputPattern();
  };
  return (
    <ResultItemContainer onClick={() => handleItemClick(resultId, handleClearPattern)}>
      <ResultImg src={image} alt="..." />
      <div>
        <Typography
          sx={{
            fontSize: "1.3em",
          }}
        >
          {name}
        </Typography>
        <PlatformImgList sx={{
          '& img':{
            height: '15px'
          }
        }} parentPlatforms={parentPlatforms}/>
      </div>
    </ResultItemContainer>
  );
};

export default ResultItem;
