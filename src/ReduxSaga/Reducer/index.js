import { combineReducers } from "redux";
import RegionReduce from "./RegionReducer";

const rootReducer = combineReducers({
  regionState: RegionReduce,
});

export default rootReducer;
