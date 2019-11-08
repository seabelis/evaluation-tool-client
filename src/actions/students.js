import request from "superagent";
const baseUrl = "http://localhost:4000";

export const STUDENTS_FETCHED = "STUDENTS_FETCHED";

const studentsFetched = students => ({
  type: STUDENTS_FETCHED,
  payload: students
});

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

export const STUDENT_ADD_SUCCESS = "STUDENT_ADD_SUCCESS";

const studentAddSuccess = batch => ({
  type: STUDENT_ADD_SUCCESS,
  payload: batch
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

export const FETCH_STUDENT_SUCCESS = "FETCH_STUDENT_SUCCESS";

const fetchStudentSuccess = student => ({
  type: FETCH_STUDENT_SUCCESS,
  payload: student
});

export const loadStudent = id => (dispatch, getState) => {
  const token = getState().auth;
  const students = getState().students;
  console.log("token", token);
  console.log("loadStudent students", students);
  console.log("CAN WE load student", getState());
  request(`${baseUrl}/students/${id}`)
    .set("Authorization", `Bearer ${token}`)
    .then(response => {
      console.log("loadStudent response:", response);
      dispatch(fetchStudentSuccess(response.body));
    });
};