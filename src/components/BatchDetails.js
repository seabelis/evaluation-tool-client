import * as React from "react";
import StudentsListContainer from "./StudentsListContainer";
// import BatchStudentsList from "./BatchStudentsList";
export default (props) => {
  const { batch } = props
  if(!batch.id) return <h1>Loading</h1>

  

  return (
    <div>
    <div>
      <h1>Batch Number: {batch.batchNumber}</h1>
      <p>Start Date: {batch.startDate}</p>
      <p>End Date: {batch.endDate}</p>
    </div>
    <StudentsListContainer/>
    {/* <BatchStudentsList batch={props.batch.id}/> */}
    {/* <ul>
      {batch.students.map(student => {
        return (
          <li>
            {student.name} : {student.photo}
          </li>
        );
      })}
    </ul> */}
  </div>
  )
}

// function BatchDetails(props) {
//   console.log("props: ", props);
//   if (!props.batch.id) return "Loading";
//   return (
    // <div>
    //   <div>
    //     <h1>Batch Number: {props.batch.batchNumber}</h1>
    //     <p>Start Date: {props.batch.startDate}</p>
    //     <p>End Date: {props.batch.endDate}</p>
    //   </div>
    //   <ul>
    //     {props.batch.students.map(student => {
    //       return (
    //         <li>
    //           {student.name} : {student.photo}
    //         </li>
    //       );
    //     })}
    //   </ul>
    // </div>
//   );
// }
// export default BatchDetails;

// import React from "react";
// import { Link } from "react-router-dom";

// export default class BatchDetails extends React.Component {
//   render() {
//     console.log("this.props.batch?", this.props.batch);
//     console.log('this.props: ',this.props)
//     console.log('this.props.students', this.props.students)

//     return this.props.batch ? (
//       <div>
//         <h1>Batch Number: {this.props.batch.batchNumber}</h1>
//         <p>Start Date: {this.props.batch.startDate}</p>
//         <p>End Date: {this.props.batch.endDate}</p>
//         <ul className='list-students'>
//         {this.props.students.map(student => {
//           return (
//             <li key={student.id}>
//               <img className='profileImg' src={student.photo} alt={student.name}/>
//               <Link to={`/students/${student.id}`}>
//                 {student.name}
//                 </Link> Batch: {student.batchId}

//             </li>
//           );
//         })}
//       </ul>
//       </div>
//     ) : (
//       "Loading..."
//     );
//   }
// }
