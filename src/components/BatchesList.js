import React from "react";
import { Link } from "react-router-dom";

export default function BatchesList(props) {
  if (!props.batches) return "Loading...";
  // console.log("props: ", props);
  // console.log("props.batches: ", props.batches);

  return (
    <div>
      <ul>
        {props.batches.map(batch => {
          return (
            <li key={batch.id}>
              <Link to={`/batches/${batch.id}`}>
                Batch: {batch.batchNumber}
              </Link>{" "}
              Dates: {batch.startDate} - {batch.endDate}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
