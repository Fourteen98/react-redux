import { createStore } from 'redux';

const reducerFn = (state = { counter: 0 }, action) => {
  if (action.type === "INC") {
    return {
      counter: state.counter + 1
    };
  } else if (action.type === "DEC") {
    return {
      counter: state.counter - 1
    };
  } else if (action.type === "ADDBY") {
    return {
      counter: state.counter + 10
    }
  }
  return state;
}
const store = createStore(reducerFn);

export default store;