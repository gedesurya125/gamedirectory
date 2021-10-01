import React from "react";
import GamesContainer from "../../components/GamesContainer/GamesContainer";
import PageBanner from "../../components/pageBanner/PageBanner";
// import { useSelector } from "react-redux";
import useGetGames from "../../function/useGetGames";
import PageTitle from "../../components/pageTitle/PageTitle";
import PaginationButton from "../../components/paginationButton/PaginationButton";
import { useHistory } from "react-router-dom";

const AllGamesPage = () => {
  // const games = useSelector(state => state.games);
  const history = useHistory();
  const games = useGetGames();

  const handlePageChange = (page) => {
    history.push(`/?page=${page}`)
  };

  return (
    <div>
      <PageBanner games={games}/>
      <PageTitle sx={{marginTop: '0.3em'}}>ALL GAMES</PageTitle>
      <GamesContainer games={games}/>
      <PaginationButton count={Math.ceil(games.data.count/20)||20} action={handlePageChange}/>
    </div>
  );
};

export default AllGamesPage;
