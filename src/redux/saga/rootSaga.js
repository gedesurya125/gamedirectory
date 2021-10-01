import {all} from 'redux-saga/effects';
import { getGamesByGenreWatcher, getGamesWatcher } from './sagaWatcher/gamesWatcher';
import { getGenresWatcher } from './sagaWatcher/genresWatcher';

export default function* rootSaga(){
  yield all([
    //saga watcher list
    getGamesWatcher(),
    getGamesByGenreWatcher(),
    getGenresWatcher()
  ])
}