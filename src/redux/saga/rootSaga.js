import {all} from 'redux-saga/effects';
import { getGamesByGenreWatcher, getGamesWatcher } from './sagaWatcher/gamesWatcher';

export default function* rootSaga(){
  yield all([
    //saga watcher list
    getGamesWatcher(),
    getGamesByGenreWatcher(),
  ])
}