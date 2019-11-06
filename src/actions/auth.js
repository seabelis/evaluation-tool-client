// actions/auth.js
import request from "superagent";
const baseUrl = "http://localhost:4000";

export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT ";


export const login = (email, password) => (dispatch, getState) => {
  console.log(email, password);
  request
    .post(`${baseUrl}/login`)
    .send({ email, password })
    .then(response => {
      dispatch({ type: USER_LOGIN, payload: response.body.jwt });
    })
    .catch(console.error);
};

export const logout = () => dispatch => {
  dispatch({
    type: USER_LOGOUT, payload: null
  });
};
