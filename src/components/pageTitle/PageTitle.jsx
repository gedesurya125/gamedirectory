import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import * as appColor from "../../settings/appColor";

const TitleContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));
const TitleLine = styled("span")(({ theme }) => ({
  height: "5px",
  width: "100%",
  backgroundColor: appColor.primaryYellow,
  borderRadius: "10px",
}));
const PageTitle = ({ children, sx, lineSx, leftLine = true, rightLine = true }) => {
  return (
    <TitleContainer>
      <TitleLine
        sx={{
          display: !leftLine && "none",
          marginRight: Boolean(children) !== false ? '0.5em': '0',
          ...lineSx
        }}
      />
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          fontFamily: "Bebas Neue",
          color: appColor.primaryYellow,
          fontSize: "3em",
          whiteSpace: "nowrap",
          ...sx,
        }}
      >
        {children}
      </Typography>
      <TitleLine
        sx={{
          display: !rightLine && "none",
          marginLeft: Boolean(children) !== false ? '0.5em': '0',
          ...lineSx 
        }}
      />
    </TitleContainer>
  );
};

export default PageTitle;
