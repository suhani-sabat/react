import { useSelector, useDispatch } from "react-redux";
import { deleteExpense } from "../features/expenseSlice";

export default function ExpenseList() {
  const expenses = useSelector((state) => state.expense.expenses);
  const users = useSelector((state) => state.person.persons);
  const dispatch = useDispatch();

  return (
    <>
      <div className="text-center mt-2 mb-2">Complete Expense list</div>

      <ul className="list-none">
        {expenses.map((expense) => {
          const currUser = users.find((user) => expense.paidBy === user.id);

          return (
            <li key={expense.id}>
              <p>Amount = {expense.amount}</p>
              <p>{expense.description}</p>
              <p>Paid by: {currUser ? currUser.name : "Unknown"}</p>
              <button onClick={() => dispatch(deleteExpense(expense.id))}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a48.108 48.108 0 013.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
