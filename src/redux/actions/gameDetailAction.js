import * as types from './actionTypes';

export const getGameDetailAction = (id) => ({type: types.GET_GAME_DETAIL, payload: {id}});
export const setGameDetailAction = (data) => ({type: types.SET_GAME_DETAIL, payload: {data}});
export const setLoadingGameDetailAction = () => ({type: types.SET_LOADING_GAME_DETAIL});
export const unsetLoadingGammeDetailAction = () => ({type: types.UNSET_LOADING_GAME_DETAIL});