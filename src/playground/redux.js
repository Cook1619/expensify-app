import { createStore, combineReducers } from "redux";
import uuid from "uuid";

//Action Generators - functions that return action objects
const incrementCount = ({ incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy
})

const decrementCount = ({ decrementBy =1 } ={}) => ({
  type: 'DECREMENT',
  decrementBy
})

const setCount = ({ count }) => ({
  type: 'SET',
  count
})

const resetCount = () => ({
  type: 'RESET'
})

//Reducers
// 1. Reducers are pure functions only depends on input, and only changes variables passed in
// 2. Never change state or action, not directly, no mutating, just read

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.count
      }
    case "RESET":
      return {
        count: 0
      }
    default:
      return state;
  }
}

const store = createStore(countReducer);

//This gets called everytime the store changes
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// Actions - than an object that gets sent to the store

// Increment
//dispatch allows you to send an actions object to the store,
// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 5
// });
store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(incrementCount())

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }))

