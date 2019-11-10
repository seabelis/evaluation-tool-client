import React from "react";
import { loadEvaluations } from "../actions/evaluations";
import { connect } from "react-redux";
import EvaluationsList from "./EvaluationsList";

class EvaluationsListContainer extends React.Component {
  componentDidMount() {
    console.log("hi, from EvaluationsListContainer", this.props);
    this.props.loadEvaluations();
  }

  render() {
    console.log("What is this.props.evaluations?", this.props.evaluations);    

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
