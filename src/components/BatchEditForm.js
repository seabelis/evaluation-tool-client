import React from "react";

export default function(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <label>Batch Number</label>
      <input
        value={props.batchNumber}
        batchnumber="batchNumber"
        onChange={props.onChange}
      />
      <label>Start Date</label>
      <input
        value={props.startDate}
        startdate="startDate"
        onChange={props.onChange}
      />
      <label>End Date</label>
      <input
        value={props.endDate}
        enddate="endDate"
        onChange={props.onChange}
      />
      <input type="Submit" />
    </form>
  );
}
