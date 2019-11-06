import React from "react";
import { Link } from "react-router-dom";

export default function BatchesList(props) {
  if (props.batches.length === 0) return "No batches to display.";

  return (
    <div>
      {props.batches.map(batch => {
        return (
          <li key={batch.id}>
            <Link to={`/batches/${batch.id}`}>
              Batch Number: {batch.batchNumber}
            </Link>
          </li>
        );
      })}
    </div>
  );
}
