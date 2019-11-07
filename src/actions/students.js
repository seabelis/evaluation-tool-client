import request from "superagent";
const baseUrl = "http://localhost:4000";

export const loadStudents = () => (dispatch, getState) => {
  const token = getState().auth;
  if (getState().students.length !== 0) return;
  request(`${baseUrl}/students`)
    .set("Authorization", `Bearer ${token}`)
    .send()

    .then(response => {
      console.log("loadStudents response:", response);
      dispatch(studentsFetched(response.body));
    })
    .catch(console.error);
};

const studentsFetched = students => ({
  type: STUDENTS_FETCHED,
  payload: students
});

export const STUDENTS_FETCHED = "STUDENTS_FETCHED";

export const STUDENT_ADD_SUCCESS = "STUDENT_ADD_SUCCESS";

const studentAddSuccess = student => ({
  type: STUDENT_ADD_SUCCESS,
  payload: student
});

export const addStudent = data => (dispatch, getState) => {
  const token = getState().auth;

  request
    .post(`${baseUrl}/student`)
    .set("Authorization", `Bearer ${token}`)
    .send(data)
    .then(response => {
      dispatch(studentAddSuccess(response.body));
    })
    .catch(console.error);
};

