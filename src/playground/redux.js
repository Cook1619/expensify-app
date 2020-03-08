import { createStore, combineReducers } from "redux";
import uuid from "uuid";

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        count: state.count - 1
      };
    case "RESET":
      return {
        count: 0
      }
    default:
      return state;
  }
});

console.log(store.getState());
// Actions - than an object that gets sent to the store

// Increment
//dispatch allows you to send an actions object to the store,
store.dispatch({
  type: "INCREMENT"
});

store.dispatch({
  type: "INCREMENT"
});

store.dispatch({
  type: "RESET"
});

store.dispatch({
  type: "DECREMENT"
});



console.log(store.getState());
