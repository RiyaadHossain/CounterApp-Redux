import { createStore } from "redux";

// Reducer Function
const reducerFn = (state = { counter: 0 }, actions) => {
    if (actions.type === 'INC') return {counter : state.counter + 1} // To Increment
    if (actions.type === 'DEC') return {counter : state.counter - 1} // To Decrement
    return state
};

// Create Store
const store = createStore(reducerFn);
export { store };
