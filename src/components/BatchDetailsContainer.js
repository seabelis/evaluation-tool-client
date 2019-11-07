import React from "react";
import { connect } from "react-redux";
import BatchDetails from "./BatchDetails";
import { loadBatch } from "../actions/batches";

class BatchDetailsContainer extends React.Component {
  componentDidMount() {
    console.log(
      "BatchDetailsContainer this.props.match.params.id?",
      this.props.match.params.id
    );
    this.props.loadBatch(this.props.match.params.id);
  }

  render() {
    console.log("this.props.match.params.id: ", this.props.match.params.id);
    console.log("this.props.batch: ", this.props.batch);

    return <BatchDetails batch={this.props.batch} />;
  }
}

const mapStateToProps = state => ({
  batch: state.batch
});

export default connect(
  mapStateToProps,
  { loadBatch }
)(BatchDetailsContainer);
