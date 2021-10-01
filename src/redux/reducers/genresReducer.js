import * as types from '../actions/actionTypes';

const initialState = {
  data:{},
  loading: false
};

const genresReducer = (state = initialState, action) => {
  switch(action.type){
    case types.SET_GENRES: return {
      ...state,
      data: action.payload.data
    };
    case types.SET_LOADING_GENRES: return {
      ...state,
      loading: true
    };
    case types.UNSET_LOADING_GENRES: return {
      ...state,
      loading: false
    }
    default: return state
  }
}

export default genresReducer;