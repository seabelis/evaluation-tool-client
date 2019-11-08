import * as React from "react";
// import { Link } from "react-router-dom";

export default props => {
  const { student } = props;
  // if (!student.id) return <h1>Loading</h1>;
  console.log("student details", props.student);

  return (
    <div>
      <div>
        <h1>Student Name: {student.name}</h1>
        <p>Batch: {student.batchId}</p>
      </div>
      
    </div>
  );
};
