import * as actionType from "../../Actions/action_types"
import  initialStates from "../initialState";

export default function userIdReducer(state=initialStates.user_id.uid, action){
    switch (action.type) {
        case actionType.USER_ID:
            return {
                ...state , uid : action.payload
            }
         
        default:
            return state ;
    }
}