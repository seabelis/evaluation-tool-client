import { STUDENTS_FETCHED, STUDENT_ADD_SUCCESS } from "../actions/students";
export default (state = [], action = {}) => {
  switch (action.type) {
    case STUDENTS_FETCHED:
      return [...state, ...action.payload];
    case STUDENT_ADD_SUCCESS:
      return [...state, { ...action.payload }];
    default:
      return state;
  }
};