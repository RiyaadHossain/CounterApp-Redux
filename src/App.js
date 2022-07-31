import { useSelector, useDispatch } from "react-redux";
import {actions} from "./store/index"

function App() {
  // Basic Redux
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: "INC" });
  };
  const decrement = () => {
    dispatch({ type: "DEC" });
  }; 
  /* ------------------------------------------------------------------------------*/

  // Redux Toolkit
  const incrementKit = () => {
    dispatch(actions.increment());
  };
  const decrementKit = () => {
    dispatch(actions.decrement());
  }; 
  
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
            className="btn font-bold text-3xl w-14 h-10 m-5 rounded-lg bg-green-500"
          >
            +
          </button>
          <button
            onClick={decrement}
            className="btn font-bold text-3xl w-14 h-10 m-5 rounded-lg bg-red-500"
          >
            -
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
            className="btn font-bold text-3xl w-14 h-10 m-5 rounded-lg bg-green-500"
          >
            +
          </button>
          <button
            onClick={decrementKit}
            className="btn font-bold text-3xl w-14 h-10 m-5 rounded-lg bg-red-500"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
