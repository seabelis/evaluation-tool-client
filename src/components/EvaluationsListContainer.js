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
    console.log(
      "What is this.props.evaluations.length?",
      this.props.evaluations
    );

/// basic randomizer for array ////////////////////////////
    function random_item(items) {
      return items[Math.floor(Math.random() * items.length)];
    }
    const items = this.props.evaluations;
    console.log('random item', random_item(items));
////////////////////////////////////////////////////////

// weighted randomizer for array //////////////////////
const list = this.props.evaluations;
const weight = [0.5, 0.33, 0.17]

const generateWeighedList = function(list, weight) {
  const weighed_list = [];
   
  // Loop over weights
  for (let i = 0; i < weight.length; i++) {
      let multiples = weight[i] * list.length;
       
      // Loop over the list of items
      for (let j = 0; j < multiples; j++) {
          weighed_list.push(list[i]);
      }
  }
   
  return weighed_list;
};
const weighed_list = generateWeighedList(list, weight);
const rand = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const random_num = rand(0, weighed_list.length-1);
console.log('random_num',   random_num);


console.log('weighted_list', weighed_list);


//////////////////////////////////////////////////
    return (
      <div>
        <h3>All Evauations</h3>
        <EvaluationsList evaluations={this.props.evaluations} />
        {/* <p>Ask: {items}</p> */}
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
