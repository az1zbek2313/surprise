import * as actionType from "../../Actions/action_types"
import  initialStates from "../initialState";

export default function productIdReducer(state=initialStates.product_id, action){
    switch (action.type) {
        case actionType.PRODUCT_ID:
            return {
                ...state, id : action.payload
            }
         
        default:
            return state ;
    }
}