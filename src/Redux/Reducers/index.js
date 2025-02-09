import { combineReducers } from "@reduxjs/toolkit";
import { myAdress, myFavourites, userIdReducer, myCart, productIdReducer, productShowReducer } from "./AllReducers";

const rootReducer = combineReducers({
  //All reducers
  myAdress,
  myFavourites,
  userIdReducer,
  myCart,
  productIdReducer,
  productShowReducer
});

export default rootReducer;
