import React from "react";
import { loadBatches } from "../actions/batches";
import { connect } from "react-redux";
import BatchesList from "./BatchesList";
import BatchEditFormContainer from "./BatchEditFormContainer";

class BatchesListContainer extends React.Component {
  componentDidMount() {
    console.log("hi, from BatchesListContainer", this.props);
    this.props.loadBatches();
  }

  render() {
    console.log("What is this.props?", this.props);
    console.log("logged in?", this.props.loggedIn);
    return (
      <div>
        <h3>Add Batch</h3>
        <BatchEditFormContainer />
        <h3>All Batches</h3>
        <BatchesList batches={this.props.batches} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    batches: state.batches,
    loggedIn: state.auth !== null
  };
};

export default connect(
  mapStateToProps,
  { loadBatches }
)(BatchesListContainer);
