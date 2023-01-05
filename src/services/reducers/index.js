import { combineReducers } from "redux";
import { gameStartReducer } from "../reducers/gameReducers";

const rootReducer = combineReducers({
	gameStartReducer,
});
export default rootReducer;
