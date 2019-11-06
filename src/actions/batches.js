import request from "superagent";
import { get } from "http";

export const BATCHES_FETCHED = "BATCHES_FETCHED";

const baseUrl = "http://localhost:4000";

const batchesFetched = batches => ({
  type: BATCHES_FETCHED,
  payload: batches
});

export const loadBatches = () => (dispatch, getState) => {
  const token = getState().auth;
console.log('what is getState.auth?', getState().auth)
  // guard statement that checks if we already have teams
  if (getState().batches.length !== 0) return;
  request(`${baseUrl}/batches`) // url correct? -> make request with httpie first
  .set("Authorization", `Bearer ${token}`)
  .send()

    .then(response => {
      console.log('response:', response) 
      // -> have a look at the body of the request or status code
      // dispatch an EVENTS_FETCHED action that contains the events
      dispatch(batchesFetched(response.body)); // check redux devtools if action got dispatched
    })
    .catch(console.error); // if you don't console response, check the console for errors
};



export const FETCH_BATCH_SUCCESS = "FETCH_BATCH_SUCCESS";

const fetchBatchSuccess = batch => ({
  type: FETCH_BATCH_SUCCESS,
  payload: batch
});

export const loadBatch = id => (dispatch, getState) => {
  console.log("CAN WE GET THE STATE??", getState());
  request(`${baseUrl}/batches/${id}`).then(response => {
    console.log(response);
    dispatch(fetchBatchSuccess(response.body));
  });
};