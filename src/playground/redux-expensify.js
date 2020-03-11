import { createStore, combineReducers } from "redux";
import uuid from "uuid";

// ADD-EXPENSE
// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expenes Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Filters reducer

const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type){
    default:
      return state
  }
}

//Store Creation

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filterReducer
  })
);

console.log(store.getState());

const demoState = {
  expenses: [
    {
      id: "dfdsfsdsd",
      description: "Rent",
      notes: "This is for the final payment for rent",
      amount: 54500,
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
