import { combineReducers } from "redux";
import counterReducer from "./counter/counter.slice";


const rootReducer = combineReducers({
  counter: counterReducer
});

export default rootReducer;