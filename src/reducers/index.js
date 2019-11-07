// reducers/index.js

import { combineReducers } from "redux";
import auth from "./auth";
import batches from "./batches";
import batch from "./batch";

export default combineReducers({
  auth,
  batches,
  batch
});
