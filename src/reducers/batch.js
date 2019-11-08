import { FETCH_BATCH_SUCCESS, } from "../actions/batches";

export default (state = [], action = {}) => {
  switch (action.type) {
    case FETCH_BATCH_SUCCESS:
      // return [ ...state, ...action.payload ];
      return { ...action.payload };

    default:
      return state;
  }
};
