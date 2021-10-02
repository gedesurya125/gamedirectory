import React, { useState, useEffect, useRef } from "react";
import { styled } from "@mui/material/styles";
import { Collapse } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { searchGamesApi } from "../../redux/api/gamesApi";
import SearchResults from "./SearchResults";

const SearchBarContainer = styled("div")(({ theme }) => ({
  width: "100%",
  position: "relative",
  "& .MuiSvgIcon-root": {
    position: "absolute",
    // color: 'black',
    top: 7,
    left: 7,
  },
  "& input": {
    width: "100%",
    border: "none",
    fontSize: "1.2em",
    color: "white",
    padding: theme.spacing(1, 1, 1, 5),
    borderRadius: 8,
    background: theme.palette.background.paper,
    "&:focus": {
      outline: "none",
    },
  },
}));

const SearchBar = () => {
  // const [openResult, setOpenResult] = useState(false);
  const [inputPattern, setInputPattern] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const searchBarRef = useRef(null);
  const handleChangeInput = (e) => {
    e.preventDefault();
    setInputPattern(e.target.value);
  };
  const handleClearPattern = (e) => {
    setInputPattern("");
  }
  const searchMovie = async (pattern) => {
    try {
      setLoading(true);
      const response = await searchGamesApi(pattern);
      if (response.data) {
        // console.log("RESULTNYA BRO", response.data);
        setResults(response.data.results);
        setLoading(false);
      } else {
        console.log("UNKNOWN DATA RECEIVED");
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      console.log("ERROR GETTING SEARCH DATA :", err.response);
    }
  };
  useEffect(() => {
    //effect
    let searchTimeout;
    if (Boolean(inputPattern)) {
      searchTimeout = setTimeout(() => {
        searchMovie(inputPattern);
      }, 200);
    } else {
      setLoading(true);
      setResults(null);
    }
    return () => {
      clearTimeout(searchTimeout);
    };
  }, [inputPattern]);

  useEffect(() => {
    const handleClearInputPattern = (e) => {
      if (inputPattern !== "" && searchBarRef.current && !searchBarRef.current.contains(e.target)) {
        setInputPattern("");
      }
    };
    document.addEventListener("mousedown", handleClearInputPattern);

    return ()=>{
      document.removeEventListener("mousedown", handleClearInputPattern);
    }
  }, [inputPattern]);

  return (
    <SearchBarContainer ref={searchBarRef}>
      <SearchIcon />
      <input value={inputPattern} onChange={handleChangeInput} />
      <Collapse
        in={Boolean(inputPattern)}
        sx={{
          position: "absolute",
          top: "40px",
          width: "100%",
          // height: "400px",
          borderRadius: "10px",
          background: "black",
          overflow: "hidden",
        }}
      >
        <SearchResults handleClearPattern = {handleClearPattern} searchResults={results} loading={loading} />
      </Collapse>
    </SearchBarContainer>
  );
};

export default SearchBar;
