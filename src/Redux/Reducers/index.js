import { combineReducers } from "@reduxjs/toolkit";
import { countChange, myAdress, myFavourites, userIdReducer } from "./AllReducers";

const rootReducer = combineReducers({
  //All reducers
  myAdress,
  myFavourites,
  countChange,
  userIdReducer
});

export default rootReducer;
