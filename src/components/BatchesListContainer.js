import React from "react";
import { loadBatches } from "../actions/batches";
import { connect } from "react-redux";
import BatchesList from "./BatchesList";

class BatchesListContainer extends React.Component {
  componentDidMount() {
    this.props.loadBatches();
  }

  render() {
    console.log("What is this.props?", this.props);
    console.log('logged in?', this.props.loggedIn)
    return <BatchesList batches={this.props.batches} />;
  }
}

const mapStateToProps = state => {
  return {
    batches: state.batches,
    loggedIn: state.auth !== null,
  };
};

export default connect(
  mapStateToProps,
  { loadBatches }
)(BatchesListContainer);
