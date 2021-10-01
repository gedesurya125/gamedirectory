import { takeLatest } from "redux-saga/effects";
import * as types from '../../actions/actionTypes'
import { getGamesByGenreWorker, getGamesWorker } from "../sagaWorker/gamesWorker";

export function* getGamesWatcher(){
  yield takeLatest(types.GET_GAMES, getGamesWorker);
};

export function* getGamesByGenreWatcher(){
  yield takeLatest(types.GET_GAMES_BY_GENRES, getGamesByGenreWorker);
}