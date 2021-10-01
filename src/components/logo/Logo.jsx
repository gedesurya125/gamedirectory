import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import logo from "../../assets/logo.svg";

const LogoContainer = styled("div")(({ theme }) => ({
  width: 300,
  display: "flex",
  alignItems: "center",
}));

const LogoImg = styled("img")(({ theme }) => ({
  height: 50,
  transform: "rotate(-20deg)",
}));

const Logo = (props) => {
  return (
    <LogoContainer {...props}>
      <LogoImg
        sx={{
          marginRight: 1,
        }}
        src={logo}
      />

      <Typography
        sx={{
          fontSize: "1.8em",
          fontWeight: "bold",
          fontFamily: "Bebas Neue",
          color: "black",
        }}
      >
        Game World
      </Typography>
    </LogoContainer>
  );
};

export default Logo;
