import { FETCH_STUDENT_SUCCESS, } from "../actions/students";

export default (state = [], action = {}) => {
  switch (action.type) {
    case FETCH_STUDENT_SUCCESS:
      // return [ ...state, ...action.payload ];
      return { ...action.payload };

    default:
      return state;
  }
};
