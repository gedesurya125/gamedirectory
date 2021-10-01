import React from 'react';
import GamesContainer from "../../components/GamesContainer/GamesContainer";
import PageBanner from "../../components/pageBanner/PageBanner";
// import { useSelector } from "react-redux";
import useGetGames from "../../function/useGetGames";
import PageTitle from "../../components/pageTitle/PageTitle";
import PaginationButton from "../../components/paginationButton/PaginationButton";
import { useHistory } from "react-router-dom";
import { useQuery } from '../../function/useQuery';
const GenresPage = () => {
  const history = useHistory();
  const query = useQuery();
  const games = useGetGames();

  const handlePageChange = (page) => {
    history.push(`/genres?page=${page}&genres=${query.get('genres')}&genresName=${query.get('genresName')}`)
  };

  return (
    <div>
      <PageBanner games={games}/>
      <PageTitle sx={{marginTop: '0.3em'}}>{query.get('genresName')}</PageTitle>
      <GamesContainer games={games}/>
      <PaginationButton count={Math.ceil(games.data.count/20)||20} action={handlePageChange} currentPage={query.get('page')}/>
    </div>
  )
}

export default GenresPage
