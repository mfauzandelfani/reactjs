import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import EmpSlice from "./EmpSlice";

export default configureStore(
  {
    reducer: {
      emStore: EmpSlice
    },
  },
  composeWithDevTools()
);
