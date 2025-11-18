import React, { useState } from "react";
import AddUser from "./AddUser";
import List from "./List";
import Calculator from "./Calculator";

export default function App() {
  const [input, setInput] = useState({
    user: "",
    amount: "",
  });
  const [data, setData] = useState([]);

  function handelChange(e) {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  }

  function handelSubmit(e) {
    e.preventDefault();

    setData([
      ...data,
      { id: Date.now(), user: input.user, amount: Number(input.amount) },
    ]);

    setInput({
      user: "",
      amount: "",
    });
  }

  console.log(data);
  return (
    <div>
      <AddUser
        handelChange={handelChange}
        handelSubmit={handelSubmit}
        input={input}
      />
      <List data={data} />

      <Calculator data={data} />
    </div>
  );
}
