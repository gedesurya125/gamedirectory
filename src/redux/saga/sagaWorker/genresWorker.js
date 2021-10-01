import { put } from "redux-saga/effects";
import { setGenresAction, setLoadingGenresAction, unsetLoadingGenresAction } from "../../actions/genresAction";
import { getAllGenresApi } from "../../api/genresApi";

export function* getGenresWorker (action) {
  try{
    yield put(setLoadingGenresAction());
    const {page} = action.payload;
    const response = yield getAllGenresApi(page);
    if (response.data){
      yield put(setGenresAction(response.data));
      yield put(unsetLoadingGenresAction());
    }else{
      yield put(unsetLoadingGenresAction());
      console.log('UNKNOWN RESPONSE DATA STRUCURE :', response);
    }
    
  }catch(err){
    yield put(unsetLoadingGenresAction());
    console.log('ERR AT GET GENRES WORKER', err.response)
  }
}