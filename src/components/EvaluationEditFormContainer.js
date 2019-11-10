// components/EvaluationEditFormContainer.js

import React from "react";
import { connect } from "react-redux";
import { createEvaluation } from "../actions/evaluations";
import EvaluationEditForm from "./EvaluationEditForm";

class EvaluationEditFormContainer extends React.Component {
  state = {
    studentId: '',
    lessonDate: "",
    grade: "",
    remarks: "",
    
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  

  onSubmit = event => {
    event.preventDefault();
    this.props.createEvaluation(this.state);
    this.setState({
      studentId:'',
      lessonDate: "",
      grade: "",
      remarks: ""
    });
  };

  render() {
    console.log('this.state.studentId', this.state)
    return (
      <EvaluationEditForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

export default connect(
  null,
  { createEvaluation }
)(EvaluationEditFormContainer);
