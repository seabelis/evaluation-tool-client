import { BATCHES_FETCHED, BATCH_CREATE_SUCCESS } from "../actions/batches";
export default (state = [], action = {}) => {
  switch (action.type) {
    case BATCHES_FETCHED:
      return [...state, ...action.payload];
    case BATCH_CREATE_SUCCESS:
      return [...state, { ...action.payload }];
    default:
      return state;
  }
};
