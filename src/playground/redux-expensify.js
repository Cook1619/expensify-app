import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const store = createStore((state = { count: 0 }) => {
  return state;
})

console.log(store.getState())