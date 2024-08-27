import { combineReducers } from "@reduxjs/toolkit";
import { myAdress } from "./AllReducers";

const rootReducer = combineReducers({
  //All reducers
  myAdress,
});

export default rootReducer;
