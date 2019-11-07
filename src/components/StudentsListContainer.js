import React from "react";
import { loadStudents } from "../actions/students";
import { connect } from "react-redux";
import StudentsList from "./StudentsList";

class StudentsListContainer extends React.Component {
  componentDidMount() {
    console.log("hi, from StudentsListContainer", this.props);
    this.props.loadStudents();
  }

  render() {
    console.log("What is this.props?", this.props);
    console.log("logged in?", this.props.loggedIn);
    return (
      <div>
      
        <h3>All Students</h3>
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
