import { FETCH_BATCH_SUCCESS, FETCH_BATCH_STUDENTS_SUCCESS } from "../actions/batches";

export default (state = {}, action = {}) => {
  switch (action.type) {
    case FETCH_BATCH_SUCCESS:
      return { ...action.payload };
      case FETCH_BATCH_STUDENTS_SUCCESS:
        return { ...action.payload };
    default:
      return state;
  }
};
