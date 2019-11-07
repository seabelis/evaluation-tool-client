import { STUDENTS_FETCHED } from "../actions/students";
export default (state = [], action = {}) => {
  switch (action.type) {
    case STUDENTS_FETCHED:
      return [...state, ...action.payload];
    // case STUDENT_CREATE_SUCCESS:
    //   return [...state, { ...action.payload }];
    default:
      return state;
  }
};