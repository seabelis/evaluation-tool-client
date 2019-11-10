import {
  EVALUATIONS_FETCHED,
  EVALUATION_CREATE_SUCCESS
} from "../actions/evaluations";
export default (state = [], action = {}) => {
  switch (action.type) {
    case EVALUATIONS_FETCHED:
      return [...state, ...action.payload];
    case EVALUATION_CREATE_SUCCESS:
      return [...state, { ...action.payload }];

    default:
      return state;
  }
};
