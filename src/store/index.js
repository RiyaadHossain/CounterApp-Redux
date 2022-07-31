/* import { createStore } from "redux";

// Reducer Function
const reducerFn = (state = { counter: 0 }, actions) => {
    if (actions.type === 'INC') return {counter : state.counter + 1} // To Increment
    if (actions.type === 'DEC') return {counter : state.counter - 1} // To Decrement
    return state
};

// Create Store
const store = createStore(reducerFn);
export { store }; */
/* ___________________________________________________________________________ */

import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment(state, action) {
      state.counter++;
    },
    decrement(state, action) {
      state.counter--;
    },
    addBy10(state, action) {
      state.counter += action.payload;
    },
  },
});

export const actions = counterSlice.actions;

const store = configureStore({ reducer: counterSlice.reducer });

export { store };
