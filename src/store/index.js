import { createStore } from "redux";

// Reducer Function
const reducerFn = (state = { counter: 0 }, actions) => {
    return state
};

// Create Store
const store = createStore(reducerFn);
export { store };
