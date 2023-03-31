import { createStore } from "@reduxjs/toolkit";
import empReducer from "../Reducer/emp_reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(empReducer, composeWithDevTools());

export default store;
