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
          Batch Number: <input type="text" name='batchNumber' onChange={this.props.onChange} value={this.props.values.batchNumber} />
        </label>
        <label>
          Start Date: <input name='startDate' onChange={this.props.onChange} value={this.props.values.startDate} />
        </label>
        <label>
          End Date: <input name='endDate' onChange={this.props.onChange} value={this.props.values.endDate} />
        </label>
        <input type="submit" value="Submit"></input>
      </form>
    );
  }
}
// import React from "react";

// export default function(props) {
//   return (
//     <form onSubmit={props.onSubmit}>
//       <label>Batch Number</label>
//       <input
//         value={props.batchNumber}
//         name="batchNumber"
//         onChange={props.onChange}
//       />
//       <label>Start Date</label>
//       <input
//         value={props.startDate}
//         name="startDate"
//         onChange={props.onChange}
//       />
//       <label>End Date</label>
//       <input
//         value={props.endDate}
//         name="endDate"
//         onChange={props.onChange}
//       />
//       <input type="Submit" />
//     </form>
//   );
// }

