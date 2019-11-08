// components/StudentEditForm.js

import React from "react";

export default class StudentEditForm extends React.Component {
  state = {
    name: "",
    photo: "",
    batchId: ""
  };

  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <label>
          Name:{" "}
          <input
            type="text"
            name="name"
            onChange={this.props.onChange}
            value={this.props.values.name}
          />
        </label>
        <label>
          IMG URL:{" "}
          <input
            name="photo"
            onChange={this.props.onChange}
            value={this.props.values.photo}
            placeholder="url"
          />
        </label>
        <label>
          Batch ID:{" "}
          <input
            name="batchId"
            onChange={this.props.onChange}
            value={this.props.values.batchId}
          />
        </label>

        <input type="submit" value="Submit"></input>
      </form>
    );
  }
}
