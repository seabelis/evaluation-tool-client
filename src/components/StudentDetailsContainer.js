import React from "react";
import { connect } from "react-redux";
import StudentDetails from "./StudentDetails";
import { loadStudent } from "../actions/students";
import { Link } from "react-router-dom";

class StudentDetailsContainer extends React.Component {
  componentDidMount() {
    console.log("student details container component loading");
    this.props.loadStudent(Number(this.props.match.params.id));
  }

  render() {
    console.log("studentDetailsContainer this.props.student : ", this.props.student);
    return (
      <div>
        <Link to="/"> Return to Dashboard </Link> | 
        <Link to="/students"> Return to Students List </Link>
        <StudentDetails student={this.props.student} />
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
)(StudentDetailsContainer);
