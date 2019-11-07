import React from "react";

export default class BatchDetails extends React.Component {
  render() {
    console.log("this.props.batch?", this.props.batch);
    return this.props.batch ? (
      <div>
        <h1>{this.props.batch.batchNumber}</h1>
        <p>{this.props.batch.startDate}</p>
        <p>{this.props.batch.endDate}</p>
      </div>
    ) : (
      "Loading..."
    );
  }
}
