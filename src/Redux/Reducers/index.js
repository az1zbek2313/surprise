import { combineReducers } from "@reduxjs/toolkit";
import { myAdress, myFavourites } from "./AllReducers";

const rootReducer = combineReducers({
  //All reducers
  myAdress,
  myFavourites
});

export default rootReducer;
