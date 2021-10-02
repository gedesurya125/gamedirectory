import * as types from '../actions/actionTypes';

const initialState = {
  data: {},
  loading: false
}

const gameDetailReducer = (state = initialState, action) => {
  switch(action.type){
    case types.SET_GAME_DETAIL: return {
      ...state,
      data: action.payload.data
    };
    case types.SET_LOADING_GAME_DETAIL: return {
      ...state,
      loading: true
    };
    case types.UNSET_LOADING_GAME_DETAIL: return {
      ...state,
      loading: false
    }
    default: return state;
  }
}

export default gameDetailReducer;