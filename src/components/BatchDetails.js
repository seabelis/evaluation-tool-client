import React from "react";

export default class BatchDetails extends React.Component {
  render() {
    console.log("this.props.batch?", this.props.batch);
    console.log('this.props: ',this.props)

    return this.props.batch ? (
      <div>
        <h1>Batch Number: {this.props.batch.batchNumber}</h1>
        <p>Start Date: {this.props.batch.startDate}</p>
        <p>End Date: {this.props.batch.endDate}</p>
        {/* <ul>
        {this.props.batch.students.map(student => {
          return (
            <li>
              {student.name} : {student.photo}
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