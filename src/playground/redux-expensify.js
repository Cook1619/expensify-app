import { createStore, combineReducers } from "redux";
import uuid from "uuid";

// Add expense
const addExepense = ({
  description = "",
  notes = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    notes,
    amount,
    createdAt
  }
});
// remove expense
const removeExpense = ({
    id
} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})
// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
      case 'ADD_EXPENSE':
          return [
              ...state,
              action.expense
          ]
      case 'REMOVE_EXPENSE':
          return state.filter(({ id }) => id !== action.id)
    default:
      return state;
  }
};

//Filter Reducer
const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

//Store creation

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
    console.log(store.getState());
})
const expenseOne = store.dispatch(addExepense({ description: 'Rent', amount: 10000}));
const expenseTwo = store.dispatch(addExepense({ description: 'Coffee', amount: 300}));

store.dispatch(removeExpense( { id: expenseOne.expense.id }))

const demoState = {
  expenses: [
    {
      id: "fdgdfd",
      description: "Testing",
      notes: "This is a bigger test, hooray",
      amount: 50000,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount", //date or amount
    startDate: undefined,
    endDate: undefined
  }
};
