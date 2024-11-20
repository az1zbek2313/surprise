import { combineReducers } from "@reduxjs/toolkit";
import { myAdress, myFavourites, userIdReducer, myCart } from "./AllReducers";

const rootReducer = combineReducers({
  //All reducers
  myAdress,
  myFavourites,
  userIdReducer,
  myCart
});

export default rootReducer;
