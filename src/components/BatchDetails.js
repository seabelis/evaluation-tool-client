import * as React from "react";
import { Link } from "react-router-dom";

export default props => {
  const { batch } = props;
  if (!batch.id) return <h1>Loading</h1>;
  console.log("props.batch.students", props.batch.students);
  return (
    <div>
      <div>
        <h1>Batch Number: {batch.batchNumber}</h1>
        <p>Start Date: {batch.startDate}</p>
        <p>End Date: {batch.endDate}</p>
      </div>
      <ul className="list-students">
        {props.batch.students.map(student => {
          return (
            <li key={student.id}>
              <img
                className="profileImg"
                src={student.photo}
                alt={student.name}
              />
              <br />
              <Link to={`/students/${student.id}`}>{student.name}</Link> <br />
              {student.evaluations.map(evaluation => {
                return <p key={evaluation.id}>Grade: {evaluation.grade}</p>;
                
              })}
            </li>
          );
        })}
      </ul>
    </div>
  );
};