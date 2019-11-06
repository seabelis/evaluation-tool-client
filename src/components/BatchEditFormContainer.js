import React from "react";
import { connect } from "react-redux";
import { createBatch } from "../actions/batches";
import BatchEditForm from "./BatchEditForm";

class BatchEditFormContainer extends React.Component {
  state = {
    batchNumber: "",
    startDate: "",
    endDate:""
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value,

    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.createBatch(this.state);
    this.setState({
      batchNumber: "",
      startDate: '',
      endDate: ""
    });
  };

  render() {
    return (
      <BatchEditForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

export default connect(
  null,
  { createBatch }
)(BatchEditFormContainer);