import { combineReducers } from "redux";
import GetReducer from "./GetReducer";
export default combineReducers({
  data: GetReducer,
});
