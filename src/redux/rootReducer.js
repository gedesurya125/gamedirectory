import { combineReducers } from "redux";
import gamesReducer from "./reducers/gamesReducer";


const rootReducers = combineReducers({
 games: gamesReducer
});

export default rootReducers;