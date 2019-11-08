import React from "react";
import { loadEvaluations } from "../actions/evaluations";
import { connect } from "react-redux";
import EvaluationsList from "./EvaluationsList";

class EvaluationsListContainer extends React.Component {
  componentDidMount() {
    // console.log("hi, from BatchesListContainer", this.props);
    this.props.loadEvaluations();
  }

  render() {
    // console.log("What is this.props?", this.props);
    // console.log("logged in?", this.props.loggedIn);
    return (
      <div>
        <h3>All Evauations</h3>
        <EvaluationsList evaluations={this.props.evaluations} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    evaluations: state.evaluations,
    loggedIn: state.auth !== null
  };
};

export default connect(
  mapStateToProps,
  { loadEvaluations }
)(EvaluationsListContainer);
