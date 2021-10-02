import React from "react";
import { styled } from "@mui/material/styles";
import { Skeleton } from "@mui/material";

const commonStyle = {
  maxWidth: "600px",
  margin: "30px auto",
  borderRadius: '10px'
};

const PhotoContainer = styled("div")(({ theme }) => ({
  ...commonStyle,
  "& img": {
    width: "100%",
    borderRadius: "10px",
  },
}));

const renderPhotoSkeleton = () => <Skeleton
variant="rectangular"
sx={{
  ...commonStyle,
  minHeight: "400px",
}}
/>
const renderPhotoSection = (img, loading) => {
  if (!img) {
    return renderPhotoSkeleton();
  } else if(loading){
    return renderPhotoSkeleton();
  } else {
    return (
      <PhotoContainer>
        <img src={img} alt="..." />
      </PhotoContainer>
    );
  }
};
const PhotoSection = ({ src, loading }) => <>{renderPhotoSection(src, loading)}</>;
export default PhotoSection;
