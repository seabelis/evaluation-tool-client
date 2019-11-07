import React from "react";

export default class BatchDetails extends React.Component {
  render() {
    console.log("this.props.batch?", this.props.batch);
    return this.props.batch ? (
      <div>
        <h1>Batch Number: {this.props.batch.batchNumber}</h1>
        <p>Start Date: {this.props.batch.startDate}</p>
        <p>End Date: {this.props.batch.endDate}</p>
      </div>
    ) : (
      "Loading..."
    );
  }
}
