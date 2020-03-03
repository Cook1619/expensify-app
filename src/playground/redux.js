import { createStore } from "redux";

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

const setCount = ({ count }) => ({
  type: 'SET',
  count
})

const resetCount = () => ({
  type: 'RESET',
})

//Reducers
// Reducers are pure functions
// Never change state or action

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
      };
    default:
      return state;
  }
}

const store = createStore(countReducer);

//everytime there is a change to the store this gets called or when state changes
const unsubscribe = store.subscribe(() => {
    console.log(store.getState()); 
})

//increment count
// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(decrementCount({ decrementBy: 5 }));
  
store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 100 }))

