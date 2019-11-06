// reducers/index.js

import { combineReducers } from "redux";
import auth from "./auth";
import batches from "./batches";

export default combineReducers({
  auth,
  batches
});
