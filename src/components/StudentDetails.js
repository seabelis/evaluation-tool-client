import * as React from "react";
// import { Link } from "react-router-dom";

export default props => {
  const { student } = props;
  // if (!student.id) return <h1>Loading</h1>;
  console.log("student details", props.student);

  return (
    <div>
      <div>
        <h1>{student.name}</h1>
        <img
                className="profileImg"
                src={student.photo}
                alt={student.name}
              />
        <p>Batch: {student.batchId}</p>
      </div>
      
    </div>
  );
};
