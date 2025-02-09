import * as actionType from "../../Actions/action_types"
import  initialStates from "../initialState";

export default function productShow(state=initialStates.product_id, action){
    switch (action.type) {
        case actionType.PRODUCT_SHOW:
            return action.payload
         
        default:
            return state ;
    }
}