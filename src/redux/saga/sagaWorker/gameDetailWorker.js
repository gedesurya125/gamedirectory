import {put} from 'redux-saga/effects';
import { setGameDetailAction, setLoadingGameDetailAction, unsetLoadingGammeDetailAction } from '../../actions/gameDetailAction';
import { getGameDetailApi } from '../../api/gameDetailsApi';

export function* getGameDetailWorker(action){
  try{
    yield put(setLoadingGameDetailAction());
    const response = yield getGameDetailApi(action.payload.id);
    if (response.data){
      yield put(setGameDetailAction(response.data));
      yield put(unsetLoadingGammeDetailAction());
    }else{
      yield put(unsetLoadingGammeDetailAction());
      console.log('UNKNOWN DATA STRUCTURE FOUND DETAIL: ', response)
    }
  }catch(err){
    yield put(unsetLoadingGammeDetailAction());
    console.log('ERROR AT getGameDetailWorker, DETAIL:', err.response);
  }
}