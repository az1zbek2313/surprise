import * as initialStates from "../initialState";
import * as actionTypes from "../../Actions/action_types";

export default function myAdress(state = initialStates.default.myAdress, action) {
  switch (action.type) {
    case actionTypes.DATA_ADDED_MYADRESS:
      return [...state, action.payload];

    case actionTypes.DATA_REMOVE_MYADRESS:
      return state.filter((item) => item.id != action.payload);

    case actionTypes.DATA_EDIT_MYADRESS:
      return state.map((item) =>
        item.id === action.payload.id ? action.payload.data : item
      );

    default:
      return state;
  }
}
