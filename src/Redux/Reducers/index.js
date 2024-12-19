import { combineReducers } from "@reduxjs/toolkit";
import { myAdress, myFavourites, userIdReducer, myCart, productIdReducer } from "./AllReducers";

const rootReducer = combineReducers({
  //All reducers
  myAdress,
  myFavourites,
  userIdReducer,
  myCart,
  productIdReducer
});

export default rootReducer;
