import React from "react";
import { styled } from "@mui/material/styles";
import logo from "../../assets/logo.svg";
import { Typography } from "@mui/material";
import * as appColor from "../../settings/appColor";

const OfficialBannerContainer = styled("div")(({ theme }) => ({
  minHeight: "70px",
  [theme.breakpoints.up("md")]: {
    minHeight: "100px",
  },
  width: "100%",
  position: "relative",
  background: appColor.primaryYellow,
  borderRadius: "10px",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "& img": {
    position: "absolute",
    height: "150px",
    left: "-80px",
    top: "-30px",
    zIndex: 10,
    transform: "rotate(70deg)",
    opacity: "0.9",
    [theme.breakpoints.up("md")]: {
      transform: "rotate(-20deg)",
      height: "200px",
      top: "-60px",
      left: "0px",
    },
  },
}));
const OfficialBanner = ({ children, sx }) => {
  return (
    <OfficialBannerContainer
      sx={{
        ...sx,
      }}
    >
      <img src={logo} alt="..." />
      <Typography
        component="div"
        sx={{
          position: "relative",
          zIndex: 20,
          fontSize: "3em",
          fontFamily: "Bebas Neue",
          color: "#121212",
        }}
      >
        {children}
      </Typography>
    </OfficialBannerContainer>
  );
};

export default OfficialBanner;
