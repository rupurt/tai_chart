// @flow
import { combineReducers } from "redux";
import { routerReducer as routing } from "react-router-redux";
import instrument from "./instrument";
import instruments from "./instruments";
import timeframes from "./timeframes";

const rootReducer = combineReducers({
  instrument,
  instruments,
  routing,
  timeframes
});

export default rootReducer;
