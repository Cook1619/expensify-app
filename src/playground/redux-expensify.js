import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const demoState = {
  expenses: [{
    id: 'dfdsfsdsd',
    description: 'Rent',
    notes: 'This is for the final payment for rent',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined
   }
}