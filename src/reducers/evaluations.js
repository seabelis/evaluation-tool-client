import { EVALUATIONS_FETCHED } from "../actions/evaluations";
export default (state = [], action = {}) => {
  switch (action.type) {
    case EVALUATIONS_FETCHED:
      return [...state, ...action.payload];
    
    default:
      return state;
  }
};