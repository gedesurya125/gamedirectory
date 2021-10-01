import { takeLatest } from "redux-saga/effects";
import * as types from '../../actions/actionTypes';
import { getGenresWorker } from "../sagaWorker/genresWorker";


export function* getGenresWatcher(){
  yield takeLatest(types.GET_GENRES, getGenresWorker);
}