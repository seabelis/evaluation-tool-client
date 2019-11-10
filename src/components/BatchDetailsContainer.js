import React from "react";
import { connect } from "react-redux";
import BatchDetails from "./BatchDetails";
import { loadBatch } from "../actions/batches";
import { Link } from "react-router-dom";
import StudentEditFormContainer from "./StudentEditFormContainer";

class BatchDetailsContainer extends React.Component {
  componentDidMount() {
    console.log("batch details container component loads successfully");
    this.props.loadBatch(Number(this.props.match.params.id));
  }

  render() {
    console.log("batchdetailscontainer this.props.batch : ", this.props.batch);

    
    return (
      
      <div>
        <Link to="/"> Return to Dashboard </Link>
        <h3>Add Student</h3>
        <StudentEditFormContainer />
        <BatchDetails batch={this.props.batch} />
        
      </div>
    );
  }
}

const mapStateToProps = state => ({
  batch: state.batch,
  students: state.students
});

export default connect(
  mapStateToProps,
  { loadBatch }
)(BatchDetailsContainer);
