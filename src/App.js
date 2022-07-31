import { useSelector, useDispatch } from "react-redux";
import { actions } from "./store/index";

function App() {
  const counter = useSelector((state) => state.counter); // Current State
  const dispatch = useDispatch(); // Function to Update

  // Basic Redux
  const increment = () => {
    dispatch({ type: "INC" });
  };
  const decrement = () => {
    dispatch({ type: "DEC" });
  };
  const addBy10 = () => {
    dispatch({ type: "ADD_BY_10", payload: 10 });
  };
  /* ------------------------------------------------------------------------------*/

  // Redux Toolkit
  const incrementKit = () => {
    dispatch(actions.increment());
  };
  const decrementKit = () => {
    dispatch(actions.decrement());
  };
  const addBy10Kit = () => {
    dispatch(actions.addBy10(10))
  }

  return (
    <div className="bg-sky-300 pt-20 text-center h-[100vh]">
      <div>
        <h1 className="text-4xl font-bold text-center">
          Counter App{" "}
          <span className="text-2xl text-gray-700 font-medium">
            Basic Redux
          </span>
        </h1>
        <h2 className="text-3xl font-bold mt-8 bg-slate-100 px-5 py-3 rounded-md inline-block">
          {counter}
        </h2>
        <div>
          <button
            onClick={increment}
            className="btn font-bold text-3xl w-20 h-14 m-5 rounded-lg bg-green-500"
          >
            +
          </button>
          <button
            onClick={decrement}
            className="btn font-bold text-3xl w-20 h-14 m-5 rounded-lg bg-red-500"
          >
            -
          </button>
          <button
            onClick={addBy10}
            className="btn font-bold text-3xl w-20 h-14 m-5 rounded-lg bg-blue-500"
          >
            10+
          </button>
        </div>
      </div>
      {/* -------------------------------------------------------------------------- */}
      <div className="mt-52">
        <h1 className="text-4xl font-bold text-center">
          Counter App{" "}
          <span className="text-2xl text-gray-700 font-medium">
            Redux Toolkit
          </span>
        </h1>
        <h2 className="text-3xl font-bold mt-8 bg-slate-100 px-5 py-3 rounded-md inline-block">
          {counter}
        </h2>
        <div>
          <button
            onClick={incrementKit}
            className="btn font-bold text-3xl w-20 h-14 m-5 rounded-lg bg-green-500"
          >
            +
          </button>
          <button
            onClick={decrementKit}
            className="btn font-bold text-3xl w-20 h-14 m-5 rounded-lg bg-red-500"
          >
            -
          </button>
          <button
            onClick={addBy10Kit}
            className="btn font-bold text-3xl w-20 h-14 m-5 rounded-lg bg-blue-500"
          >
            10+
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
