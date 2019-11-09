import React from "react";
import { connect } from "react-redux";
import StudentGrade from "./StudentGrade";
import { loadStudent } from "../actions/students";
import { Link } from "react-router-dom";

class StudentGradeContainer extends React.Component {
  componentDidMount() {
    console.log("student grade container component loading");
    this.props.loadStudent(Number(this.props.match.params.id));
  }

  render() {
    console.log("studentGradeContainer this.props.student : ", this.props.student);
    return (
      <div>
        <Link to="/"> Return to Dashboard </Link>
        <StudentGrade student={this.props.student} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  student: state.student,
});

export default connect(
  mapStateToProps,
  { loadStudent }
)(StudentGradeContainer);
