import React, { useState } from "react";

export default function Calculator({ data }) {
  const [total, setTotal] = useState("");
  const [split, setSplit] = useState("");

  function calcualte(a) {
    let temp = 0;

    for (let i = 0; i < data.length; i++) {
      temp += data[i].amount;
    }
    setTotal(temp);
    console.log(total);
  }

  function splitHandel() {
    let splited = Math.floor(total / data.length);

    // console.log(splited);
    setSplit(splited);
  }
  return (
    <div>
      <div className="display-data">
        <p>Total Expenses of Group {total}$</p>

        <p>Share per Person {split}$</p>
      </div>

      <button
        onClick={() => {
          calcualte(data);
        }}
      >
        Calculate the total
      </button>

      <button onClick={splitHandel}>Spliter</button>
    </div>
  );
}
