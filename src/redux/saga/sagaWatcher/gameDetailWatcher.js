import { takeLatest } from "redux-saga/effects";
import * as types from '../../actions/actionTypes'
import { getGameDetailWorker } from "../sagaWorker/gameDetailWorker";

export function* getGameDetailWatcher(){
  yield takeLatest(types.GET_GAME_DETAIL, getGameDetailWorker);
}