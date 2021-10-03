import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import * as appColor from "../../settings/appColor";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

const MobilePaginationContainer = styled("div")(({ theme }) => ({}));

const MobilePaginationButton = ({ children, ...other }) => {
  return (
    <Button
      variant="outlined"
      {...other}
      sx={{
        color: appColor.primaryYellow,
        border: `1px solid ${appColor.primaryYellow}`,
        "&:hover": {
          border: `1px solid ${appColor.primaryYellow}`,
        },
      }}
    >
      {children}
    </Button>
  );
};

const PaginationButton = ({ count = 20, action, currentPage }) => {
  const [page, setPage] = useState(1);
  // console.log('current page',currentPage);
  // console.log('PAGE CURRENT',currentPage);

  const handlePageChange = (event, value) => {
    setPage(value);
    action(value);
  };

  const handleGoToNextPage = () => {
    const nextPage = page + 1;
    action(nextPage);
    setPage(nextPage);
  };
  const handleGoToPrevPage = () => {
    const prevPage = page - 1;
    action(prevPage);
    setPage(prevPage);
  };

  useEffect(()=>{
    // console.log('its called', Number(currentPage) === 1)
    // console.log('PAGE', page)
    // if(Number(currentPage) === 1){
    //   console.log('its called 2')
    //   setPage(1)
    // }
  }, [currentPage])
  return (
    <>
      <Stack
        spacing={2}
        sx={{
          marginTop: 2,
          display: {
            xs: 'none',
            sm: 'block'
          }
        }}
      >
        <Pagination
          sx={{
            "& .MuiPagination-ul": {
              justifyContent: "center",
              // padding: '0',
              // marginLeft:{
              //   xs: '-15px',
              //   sm: '0'
              // },
              "& .MuiButtonBase-root": {
                border: "1px solid yellow",
                minWidth: "32px",
                "&.Mui-selected": {
                  backgroundColor: appColor.primaryYellow,
                  color: "black",
                },
              },
            },
          }}
          count={count}
          variant="outlined"
          page={Number(currentPage) || page}
          onChange={handlePageChange}
          shape="rounded"
          // defaultPage={Number(currentPage)}
        />
      </Stack>

      <MobilePaginationContainer
        sx={{
          textAlign: "center",
          marginTop: 2,
          "& .MuiButton-root": {
            margin: "0 0.5em",
          },
          display: {
            xs: 'block',
            sm: 'none'
          }
        }}
      >
        <MobilePaginationButton
          onClick={handleGoToPrevPage}
          disabled={page === 1}
          startIcon={<NavigateBeforeIcon />}
        >
          Prev
        </MobilePaginationButton>
        <span>{`${Number(currentPage) || page} / ${count}`}</span>
        <MobilePaginationButton
          onClick={handleGoToNextPage}
          disabled={page === count}
          endIcon={<NavigateNextIcon />}
        >
          Next
        </MobilePaginationButton>
      </MobilePaginationContainer>
    </>
  );
};

export default PaginationButton;
