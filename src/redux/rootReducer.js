import { combineReducers } from "redux";
import gameDetailReducer from "./reducers/gameDetailReducer";
import gamesReducer from "./reducers/gamesReducer";
import genresReducer from "./reducers/genresReducer";


const rootReducers = combineReducers({
 games: gamesReducer,
 genres: genresReducer,
 gameDetail: gameDetailReducer
});

export default rootReducers;