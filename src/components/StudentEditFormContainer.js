// components/StudentEditFormContainer.js

import React from "react";
import { connect } from "react-redux";
import { addStudent } from "../actions/students";
import StudentEditForm from "./StudentEditForm";

class StudentEditFormContainer extends React.Component {
  state = {
    name: "",
    photo: "",
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.addStudent(this.state);
    this.setState({
      name: "",
      photo: "",
    });
  };

  render() {
    return (
      <StudentEditForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

export default connect(
  null,
  { addStudent }
)(StudentEditFormContainer);
