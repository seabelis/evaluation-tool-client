import React from "react";
// import { Link } from "react-router-dom";

export default function EvaluationsList(props) {
  if (!props.evaluations) return "Loading...";
  // console.log("props: ", props);
  // console.log("props.batches: ", props.batches);

  return (
    <div>
      <ul className="list-students">
        {props.evaluations.map(evaluation => {
          
          return (
            
            <li key={evaluation.id}>
              {/* <Link to={`/evaluations/${evaluation.id}`}> */}
                Student ID: {evaluation.studentId}<br/>
                Lesson Date: {evaluation.lessonDate}<br/>
                Lesson Date: {evaluation.lessonDate}<br/>
                Grade: {evaluation.grade}
              {/* </Link>{" "} */}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
