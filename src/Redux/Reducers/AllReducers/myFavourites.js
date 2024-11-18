import * as initialStates from "../initialState";
import * as actionTypes from "../../Actions/action_types";

export default function myAdress(state = initialStates.default.myFavourites, action) {
  switch (action.type) {
    case actionTypes.GET_MYFAVOURITES:
      return [...action.payload];

    case actionTypes.DATA_ADDED_MYFAVOURITES:
      return [...state, action.payload];

    case actionTypes.DATA_REMOVE_MYFAVOURITES:
      return state.filter((item) => item._id != action.payload);

    case actionTypes.DATA_CHANGEHEART_MYFAVOURITES:
      return state.map((item) => {
        if (item.id === action.payload._id) {
          return { ...item, like: !item.like }; 
        }
        return item;
      });

    default:
      return state;
  }
}
