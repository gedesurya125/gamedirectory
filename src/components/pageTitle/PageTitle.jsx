import React from "react";
import { Typography } from "@mui/material";
import {styled} from '@mui/material/styles'
import * as appColor from "../../settings/appColor";

const TitleContainer = styled('div')(
  ({theme})=> ({
    display: 'flex',
    alignItems: 'center'
  })
)
const TitleLine = styled('span')(
  ({theme})=> ({
    height: '5px',
    width: '100%',
    backgroundColor: appColor.primaryYellow,
    borderRadius: '10px'
  })
)
const PageTitle = ({ children, sx }) => {
  return (
    <TitleContainer>
      <TitleLine/>
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          fontFamily: "Bebas Neue",
          color: appColor.primaryYellow,
          fontSize: "3em",
          whiteSpace: 'nowrap',
          padding: '0 0.5em',
          ...sx,
        }}
      >
        {children}
      </Typography>
      <TitleLine/>
    </TitleContainer>
  );
};

export default PageTitle;
