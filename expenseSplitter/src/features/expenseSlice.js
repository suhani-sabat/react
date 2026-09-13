import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    expenses: [
        {
            id: 1,
            description: "paid to uber",
            paidBy: "e1",
            amount: 100
        }
    ]
}

const expenseSlice = createSlice({
    name: "expense",
    initialState,
    reducers: {
        addExpense: (state, action) => {
            const expense = {
                id: nanoid(),
                description: action.payload.description,
                paidBy: action.payload.paidBy,
                amount: action.payload.amount,
                splitAmong: action.payload.splitAmong
            }
            state.expenses.push(expense)
        },

        deleteExpense: (state, action) => {
            state.expenses = state.expenses.filter((expense) => expense.id != action.payload)
        }
    }
})

export const {addExpense, deleteExpense} = expenseSlice.actions
export default expenseSlice.reducer