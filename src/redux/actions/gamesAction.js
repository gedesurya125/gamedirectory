import * as types from './actionTypes'
export const getGamesAction = (page) => ({type: types.GET_GAMES, payload: {page}});
export const getGamesByGenreAction = (page, genres) => ({type: types.GET_GAMES_BY_GENRES, payload:{page, genres}});
export const setGamesAction = (games) => ({type: types.SET_GAMES, payload: {games}});
export const setLoadingGamesAction = () => ({type: types.SET_LOADING_GAMES});
export const unsetLoadingGamesAction = () => ({type: types.UNSET_LOADING_GAMES});