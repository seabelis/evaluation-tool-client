import request from "superagent";
const baseUrl = "http://localhost:4000";

export const USER_LOGIN = "USER_LOGIN";

export const login = (email, password) => (dispatch, getState) => {
  console.log(email, password);
  request
    .post(`${baseUrl}/login`)
    .send({ email, password })
    .then(response => {
      console.log("What do we get from USER_LOGIN?", response);
      dispatch({ type: USER_LOGIN, payload: response.body.jwt });
    })
    .catch(console.error);
};
