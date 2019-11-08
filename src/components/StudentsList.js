import React from "react";
import { Link } from "react-router-dom";

export default function StudentsList(props) {
  if (!props.students) return "Loading...";
  console.log("props: ", props);
  console.log("props.students: ", props.students);

  return (
    <div>
      <ul className="list-students">
        {props.students.map(student => {
          return (
            <li key={student.id}>
              
              <Link to={`/students/${student.id}`}><img
                className="profileImg"
                src={student.photo}
                alt={student.name}
              />
              <br />
              {student.name}</Link> <br />
              Batch: {student.batchId}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
