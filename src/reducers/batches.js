import { BATCHES_FETCHED} from "../actions/batches";
export default (state = [], action = {}) => {

  switch (action.type) {
    case BATCHES_FETCHED:
      return [...state, ...action.payload];

    default:
      return state;
  }
};

