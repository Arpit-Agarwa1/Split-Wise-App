import React from "react";

export default function List({ data }) {
  return (
    <div>
      <ul>
        {data.map((obj) => {
          return (
            <li key={obj.id}>
              {obj.user} {obj.amount}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
