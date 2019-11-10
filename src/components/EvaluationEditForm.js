// components/EvaluationEditForm.js

import React from "react";

export default class EvaluationEditForm extends React.Component {
  state = {
    studentId: "",
    lessonDate: "",
    grade: "",
    remarks: ""
  };

  render() {
    console.log("hi from EvaluationEditForm", this.state);
    var utc = new Date()
      .toJSON()
      .slice(0, 10)
      .replace(/-/g, "/");

    return (
      <form onSubmit={this.props.onSubmit}>
        <label>
          Student ID:{" "}
          <input
            name="studentId"
            onChange={this.props.onChange}
            value={this.props.values.studentId}
          />
        </label>

        <label>
          Lesson Date:{" "}
          <input
            name="lessonDate"
            onChange={this.props.onChange}
            value={this.props.values.lessonDate}
            placeholder="yyyy-mm-dd"
          />
        </label>

        {/* <select name='grade' value={this.props.values.grade} onChange={this.props.onChange} defaultValue={'DEFAULT'}>
        <option value={null}>
            -select-
          </option>
          <option value="green">green</option>
          <option value="yellow">yellow</option>
          <option value="red">red</option>
        </select> */}

        <div>
          <ul>
            <li>
              <label>
                <input
                  name="grade"
                  type="radio"
                  value="green"
                  checked={this.props.values.grade === "green"}
                  onChange={this.props.onChange}
                />
                Green
              </label>
            </li>

            <li>
              <label>
                <input
                  name="grade"
                  type="radio"
                  value="yellow"
                  checked={this.props.values.grade === "yellow"}
                  onChange={this.props.onChange}
                />
                Yellow
              </label>
            </li>

            <li>
              <label>
                <input
                  name="grade"
                  type="radio"
                  value="red"
                  checked={this.props.values.grade === "red"}
                  onChange={this.props.onChange}
                />
                Red
              </label>
            </li>
          </ul>
        </div>
        <label>
          Remarks:{" "}
          <textarea
            name="remarks"
            onChange={this.props.onChange}
            value={this.props.values.remarks}
          />
        </label>

        <input type="submit" value="Submit"></input>
      </form>
    );
  }
}
