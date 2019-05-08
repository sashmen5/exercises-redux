import { combineReducers } from "redux";
import counter from './counterReducer';
import todos from "./todosReducer";

const rootReducer = combineReducers({ counter, todos })

export default rootReducer;
