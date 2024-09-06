import { combineReducers } from "@reduxjs/toolkit";
import { countChange, myAdress, myFavourites } from "./AllReducers";

const rootReducer = combineReducers({
  //All reducers
  myAdress,
  myFavourites,
  countChange
});

export default rootReducer;
