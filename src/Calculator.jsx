import React, { useState } from "react";

export default function Calculator({ data, show, setShow }) {
  const [total, setTotal] = useState("");
  const [split, setSplit] = useState("");

  function calcualte(a) {
    setShow(true);
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
      <button
        onClick={() => {
          calcualte(data);
        }}
      >
        Calculate the total
      </button>
      {show && (
        <div>
          <div className="display-data">
            <p>Total Expenses of Group {total}$</p>

            <p>Number of People to be split in {data.length}</p>

            <p>Share per Person {split}$</p>
            <button onClick={splitHandel}>Spliter</button>
          </div>
        </div>
      )}
    </div>
  );
}
