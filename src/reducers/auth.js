import { USER_LOGIN, USER_LOGOUT } from "../actions/auth";

export default function user(state = null, action = {}) {
  switch (action.type) {
    case USER_LOGIN:
      return action.payload;
      case USER_LOGOUT:
        localStorage.clear();
        return action.payload;
    default:
      return state;
  }
}
