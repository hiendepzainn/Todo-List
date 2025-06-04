import todolistReducer from "./todolist";
import { combineReducers } from "redux";

var allReducers = combineReducers({
  todolistReducer,
});

export default allReducers;
