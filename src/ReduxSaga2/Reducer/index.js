import { combineReducers } from "redux";
import CategoryReducer from "./CategoryReducer";
import UserReducer from "./UserReducer";

const rootReducer = combineReducers({
  categoryState: CategoryReducer,
  userState: UserReducer
});

export default rootReducer;
