// components/BatchEditForm.js

import React from "react";

export default class BatchEditForm extends React.Component {
  state = {
    batchNumber: "",
    startDate: "",
    endDate: ""
  };

  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <label>
          Batch Number:{" "}
          <input
            type="text"
            name="batchNumber"
            onChange={this.props.onChange}
            value={this.props.values.batchNumber}
          />
        </label>
        <label>
          Start Date:{" "}
          <input
            name="startDate"
            onChange={this.props.onChange}
            value={this.props.values.startDate}
            placeholder='yyyy-mm-dd'
          />
        </label>
        <label>
          End Date:{" "}
          <input
            name="endDate"
            onChange={this.props.onChange}
            value={this.props.values.endDate}
            placeholder='yyyy-mm-dd'

          />
        </label>
        <input type="submit" value="Submit"></input>
      </form>
    );
  }
}
