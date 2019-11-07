import React from "react";
import { loadBatchStudents } from "../actions/loadBatchStudents";
import { connect } from "react-redux";
import BatchStudentsList from "./BatchStudentsList";
import { Link } from "react-router-dom";

class BatchStudentsListContainer extends React.Component {
  componentDidMount() {
    console.log("hi, from BatchStudentsListContainer", this.props);
    this.props.loadBatchStudents();
  }

  render() {
    console.log("What is this.props?", this.props);
    console.log("logged in?", this.props.loggedIn);
    return (
      <div>
        <Link to="/"> Return to Dashboard </Link>

        <h3>Students</h3>
        <StudentsList students={this.props.students} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    students: state.students,
    loggedIn: state.auth !== null
  };
};

export default connect(
  mapStateToProps,
  { loadStudents }
)(StudentsListContainer);
