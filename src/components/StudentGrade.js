import * as React from "react";
// import { Link } from "react-router-dom";

export default props => {
  const { student } = props;
  if (!student.id) return <h1>Loading</h1>;
  console.log("student grade", props.student.evaluation.grade);

  return (
    <div>
      <div>
        
        
      </div>
        {props.student.evaluations.map(evaluation => {
          return (
            <p key={evaluation.id}>
              Grade: {student.evaluation.grade}
            </p>
          );
        })}
    </div>
  );
};