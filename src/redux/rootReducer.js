import { combineReducers } from "redux";
import gamesReducer from "./reducers/gamesReducer";
import genresReducer from "./reducers/genresReducer";


const rootReducers = combineReducers({
 games: gamesReducer,
 genres: genresReducer
});

export default rootReducers;