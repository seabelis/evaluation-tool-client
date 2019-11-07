import React from "react";
// import { Link } from "react-router-dom";


export default class BatchDetails extends React.Component {
  render() {
    console.log("this.props.batch?", this.props.batch);
    console.log('this.props: ',this.props)
    console.log('this.props.students', this.props.students)

    return this.props.batch ? (
      <div>
        <h1>Batch Number: {this.props.batch.batchNumber}</h1>
        <p>Start Date: {this.props.batch.startDate}</p>
        <p>End Date: {this.props.batch.endDate}</p>
        {/* <ul className='list-students'>
        {props.students.map(student => {
          return (
            <li key={student.id}>
              <img className='profileImg' src={student.photo} alt={student.name}/>
              <Link to={`/students/${student.id}`}>
                {student.name}
                </Link> Batch: {student.batchId}
              
            </li>
          );
        })}
      </ul> */}
      </div>
    ) : (
      "Loading..."
    );
  }
}


// import * as React from "react";

// function TeamDetails(props){
//   console.log('props: ',props)
//   if(!props.team.name) return 'Loading'
//   return <div>
//         {props.team.name}
//         <ul>
//         {props.team.players.map(player => {
//           return (
//             <li>
//               {player.number} : {player.name}
//             </li>
//           );
//         })}
//       </ul>
//     </div>
// }
// export default TeamDetails