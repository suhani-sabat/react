import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExpense } from "../features/expenseSlice";

export default function ExpenseAdder() {
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  const [user, setUser] = useState("---Select User---")
  const [splitAmong, setSplitAmong] = useState([]);
  const users = useSelector((state) => state.person.persons);
  const dispatch = useDispatch();

  const handleCheckboxChange = (personId, isChecked) => {
    if (isChecked) {
      setSplitAmong([...splitAmong, personId]);
    } else {
      setSplitAmong(splitAmong.filter((id) => id !== personId));
    }
  };

  const addExpenseHandler = (e) => {
    e.preventDefault()
    dispatch(addExpense({ description, amount, paidBy: user, splitAmong }))
    setAmount(0)
    setDescription("")
    setUser("---Select User---")
    setSplitAmong([])
  };

  return (
    <>
      <form onSubmit={addExpenseHandler}>
        <label htmlFor="amount">Enter Amount</label>
        <input
          type="number"
          id="amount"
          placeholder="Enter the amount..."
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <label htmlFor="description">Enter description</label>
        <input
          type="text"
          id="description"
          placeholder="Description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label htmlFor="user">Select User</label>
        <select 
        id="user"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        >
          {users.map((user) => (
            <option value={user.id} key={user.id}>{user.name}</option>
          ))}
        </select>

        <div>
          <p>Split Among:</p>
          {users.map((u) => (
            <label key={u.id} style={{ display: "block" }}>
              <input
                type="checkbox"
                checked={splitAmong.includes(u.id)}
                onChange={(e) => handleCheckboxChange(u.id, e.target.checked)}
              />
              {u.name}
            </label>
          ))}
        </div>

        <button type="submit">Add</button>
      </form>
    </>
  );
}