import React from 'react';
import { styled } from "@mui/material/styles";
import { Skeleton } from '@mui/material';


const DescriptionContainer = styled("div")(({ theme }) => ({}));

const Description = ({text, innerHTML}) => {

  /**
   * renderDescription
   * @param {*} text general Text
   * @param {string} innerH text formatted as HTML 
   */
  const renderDescription = (text, innerH) => {
    if(text || innerH){
      return(
        <DescriptionContainer dangerouslySetInnerHTML={{__html: innerH}}/>
      )
    }else{
      return(
        <div>
          <Skeleton/>
          <Skeleton/>
          <Skeleton/>
          <Skeleton/>
          <Skeleton width="60%" sx={{marginBottom: '20px'}}/>
          <Skeleton/>
          <Skeleton/>
          <Skeleton/>
          <Skeleton/>
          <Skeleton width="60%"/>
        </div>
      )
    }
  }

  return <>{renderDescription(text, innerHTML)}</>
}

export default Description
