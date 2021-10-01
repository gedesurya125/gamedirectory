import * as types from './actionTypes';

export const getGenresAction = (page) => ({type: types.GET_GENRES, payload:{page}})
export const setGenresAction = (data) => ({type: types.SET_GENRES, payload:{data}});
export const setLoadingGenresAction = () => ({type: types.SET_LOADING_GENRES});
export const unsetLoadingGenresAction = () => ({type: types.UNSET_LOADING_GENRES});