import * as initialStates from "../initialState";
import * as actionTypes from "../../Actions/action_types";

export default function countChange(state = initialStates.default.defaultCount, action) {
  switch (action.type) {
    case actionTypes.INCEREMENT:
      return state > 1 ? --state : 1;

    case actionTypes.DECREMENT:
      return ++state;

    case actionTypes.INPUTAMOUNT:
      return action.payload;

    default:
      return state;
  }
}
