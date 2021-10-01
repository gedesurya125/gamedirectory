import { put } from "redux-saga/effects";
import {
  setGamesAction,
  setLoadingGamesAction,
  unsetLoadingGamesAction,
} from "../../actions/gamesAction";
import { getAllGamesApi, getGamesByGenreApi } from "../../api/gamesApi";

export function* getGamesWorker(action) {
  try {
    yield put(setLoadingGamesAction());
    const response = yield getAllGamesApi(action.payload.page);
    if (response.data) {
      yield put(setGamesAction(response.data));
      yield put(unsetLoadingGamesAction());
    } else {
      console.log("UNKNOWN RESPONSE STRUCTURE DETAILS: ", response);
      yield put(unsetLoadingGamesAction());
    }
  } catch (err) {
    console.log("ERROR AT getGamesWorker details", err.response);
    yield put(unsetLoadingGamesAction());
  }
}

export function* getGamesByGenreWorker(action) {
  const { page, genres } = action.payload;
  try {
    yield put(setLoadingGamesAction());
    const response = yield getGamesByGenreApi(page, genres);
    if (response.data) {
      yield put(setGamesAction(response.data));
      yield put(unsetLoadingGamesAction());
    } else {
      console.log("UNKNOWN RESPONSE STRUCTURE DETAILS: ", response);
      yield put(unsetLoadingGamesAction());
    }
  } catch (err) {
    console.log("ERROR AT getGamesWorker details", err);
    yield put(unsetLoadingGamesAction());
  }
}
