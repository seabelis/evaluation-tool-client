import request from "superagent";
const baseUrl = "http://localhost:4000";

export const BATCHES_FETCHED = "BATCHES_FETCHED";


const batchesFetched = batches => ({
  type: BATCHES_FETCHED,
  payload: batches
});

export const loadBatches = () => (dispatch, getState) => {
  const token = getState().auth;
  // console.log("what is getState.auth?", getState().auth);
  if (getState().batches.length !== 0) return;
  request(`${baseUrl}/batches`)
    .set("Authorization", `Bearer ${token}`)
    .send()

    .then(response => {
      // console.log("response:", response);
      dispatch(batchesFetched(response.body));
    })
    .catch(console.error);
};

export const FETCH_BATCH_SUCCESS = "FETCH_BATCH_SUCCESS";

const fetchBatchSuccess = batch => ({
  type: FETCH_BATCH_SUCCESS,
  payload: batch
});

export const loadBatch = id => (dispatch, getState) => {
  const token = getState().auth;
  // const batches = getState().batches;
  // console.log("token", token);
  // console.log("loadBatch batches", batches);
  // console.log("CAN WE load batch", getState());
  request(`${baseUrl}/batches/${id}`)
    .set("Authorization", `Bearer ${token}`)
    .then(response => {
      // console.log("loadbatch response:", response);
      dispatch(fetchBatchSuccess(response.body));
    });
};

export const BATCH_CREATE_SUCCESS = "BATCH_CREATE_SUCCESS";

const batchCreateSuccess = batch => ({
  type: BATCH_CREATE_SUCCESS,
  payload: batch
});

export const createBatch = data => (dispatch, getState) => {
  const token = getState().auth;

  request
    .post(`${baseUrl}/batch`)
    .set("Authorization", `Bearer ${token}`)
    .send(data)
    .then(response => {
      dispatch(batchCreateSuccess(response.body));
    })
    .catch(console.error);
};

