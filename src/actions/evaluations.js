import request from "superagent";
const baseUrl = "http://localhost:4000";

export const EVALUATIONS_FETCHED = "EVALUATIONS_FETCHED";

const evaluationsFetched = evaluations => ({
  type: EVALUATIONS_FETCHED,
  payload: evaluations
});

export const loadEvaluations = () => (dispatch, getState) => {
  const token = getState().auth;
  if (getState().evaluations.length !== 0) return;
  request(`${baseUrl}/evaluations`)
    .set("Authorization", `Bearer ${token}`)
    .send()

    .then(response => {
      console.log("loadEvaluations response:", response);
      dispatch(evaluationsFetched(response.body));
    })
    .catch(console.error);
};

export const EVALUATION_CREATE_SUCCESS = "EVALUATION_CREATE_SUCCESS ";

const evaluationCreateSuccess = evaluation => ({
  type: EVALUATION_CREATE_SUCCESS,
  payload: evaluation
});

export const createEvaluation = data => (dispatch, getState) => {
  const token = getState().auth;

  request
    .post(`${baseUrl}/evaluation`)
    .set("Authorization", `Bearer ${token}`)
    .send(data)
    .then(response => {
      dispatch(evaluationCreateSuccess(response.body));
    })
    .catch(console.error);
};