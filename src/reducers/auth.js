// reducers/auth.js

import { USER_LOGIN, USER_LOGOUT } from "../actions/auth";

const token = localStorage.getItem("jwt");
const initialState = token ? token : null;

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case USER_LOGIN:
      localStorage.setItem("jwt", action.payload);

      return action.payload;
    case USER_LOGOUT:
      localStorage.clear();
      return action.payload;
    default:
      return state;
  }
};

// export default function user(state = null, action = {}) {
//   switch (action.type) {
//     case USER_LOGIN:
//       return action.payload;
//       case USER_LOGOUT:
//         localStorage.clear();
//         return action.payload;
//     default:
//       return state;
//   }
// }
