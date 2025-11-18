export default function AddUser({ input, handelChange, handelSubmit }) {
  return (
    <div>
      <form action="" onSubmit={handelSubmit}>
        <input
          type="text"
          name="user"
          value={input.user}
          id=""
          placeholder="Enter your Name"
          onChange={handelChange}
        />
        <input
          type="number"
          name="amount"
          value={input.amount}
          placeholder="Enter your Expense"
          onChange={handelChange}
        />

        <button type="sumbit">Add </button>
      </form>
    </div>
  );
}
