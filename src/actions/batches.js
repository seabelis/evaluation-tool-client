import request from "superagent";

export const BATCHES_FETCHED = "BATCHES_FETCHED";

const baseUrl = "http://localhost:4000";

const batchesFetched = batches => ({
  type: BATCHES_FETCHED,
  payload: batches
});

export const loadBatches = () => (dispatch, getState) => {
  const token = getState().auth;
console.log('what is getState.auth?', getState().auth)
  if (getState().batches.length !== 0) return;
  request(`${baseUrl}/batches`) 
  .set("Authorization", `Bearer ${token}`)
  .send()

    .then(response => {
      console.log('response:', response) 
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
  console.log("CAN WE GET THE STATE??", getState());
  request(`${baseUrl}/batches/${id}`).then(response => {
    console.log(response);
    dispatch(fetchBatchSuccess(response.body));
  });
};