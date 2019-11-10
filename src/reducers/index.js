// reducers/index.js

import { combineReducers } from "redux";
import auth from "./auth";
import batches from "./batches";
import batch from "./batch";
import students from "./students";
import student from "./student";
import evaluations from "./evaluations";



export default combineReducers({
  auth,
  batches,
  batch,
  students,
  evaluations,
  student,
});
