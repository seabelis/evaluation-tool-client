import { USER_LOGIN } from "../actions/auth"

export default function user (state = null, action ={}){
     switch(action.type){
        case USER_LOGIN:
            return action.payload

        default:
            return state
    }

}
