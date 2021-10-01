import * as types from "../actions/actionTypes";

const initialState = {
  data:{},
  loading: false
};

const gamesReducer = (state = initialState, action) => {
  switch(action.type){
    case types.SET_GAMES: return {
      ...state,
      data: action.payload.games
    };
    case types.SET_LOADING_GAMES: return {
      ...state,
      loading: true
    };
    case types.UNSET_LOADING_GAMES: return {
      ...state,
      loading: false
    }
    default: return state
  }
}

export default gamesReducer;