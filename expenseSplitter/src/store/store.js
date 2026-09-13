import { configureStore } from "@reduxjs/toolkit";
import personReducer from "../features/personSlice";
import expenseReducer from "../features/expenseSlice";

export const store = configureStore({
  reducer: {
    person: personReducer,
    expense: expenseReducer,
  },
});
