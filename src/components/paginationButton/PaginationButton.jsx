import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import * as appColor from '../../settings/appColor'

const PaginationButton = ({ count = 20, action, currentPage }) => {
  const [page, setPage] = useState(1);
  // console.log(currentPage);
  const handlePageChange = (event, value) => {
    // console.log(value);
    setPage(value);
    action(value);
  };

  useEffect(() => {
    if (Number(currentPage) === 1) {
      setPage(1);
    }
  }, [currentPage]);

  return (
    <Stack spacing={2} sx={{ marginTop: 2 }}>
      <Pagination
        sx={{
          "& .MuiPagination-ul": {
            justifyContent: "center",
            "& .MuiButtonBase-root":{
              border: '1px solid yellow',
              "&.Mui-selected":{
                backgroundColor: appColor.primaryYellow,
                color: 'black'
              }
            }
          },
          
        }}
        count={count}
        variant="outlined"
        page={page}
        onChange={handlePageChange}
        shape="rounded"
      />
    </Stack>
  );
};

export default PaginationButton;
