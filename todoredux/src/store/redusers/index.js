import { combineReducers } from "redux";
import todosReduser from "./todosReduser";

export default combineReducers({
  todosState: todosReduser,
});
