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

// import * as React from "react";
// import StudentsListContainer from "./StudentsListContainer";
// // import BatchStudentsList from "./BatchStudentsList";
// import { Link } from "react-router-dom";

// export default (props) => {
//   const { batch } = props
//   // if(!batch.id) return <h1>Loading</h1>
//   console.log('batch details', props.batch)

  

//   return (
//     <div>
// <ul className='list-students'>
//         {props.batch.map(batch => {
//           return (
//             <li key={batch.id}>
// <img className='profileImg' src={batch.photo} alt={batch.name}/>
// <br />

//               <Link to={`/students/${batch.batchId}`}>
//                 Batch: {batch.name}
//               </Link>{" "}
//               Batch: {batch.batch.id} 
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   )
// }