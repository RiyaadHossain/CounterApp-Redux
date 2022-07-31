import { useSelector, useDispatch } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: "INC" });
  };
  const decrement = () => {
    dispatch({ type: "DEC" });
  };
  return (
    <div className="bg-sky-300 pt-20 text-center h-[100vh]">
      <h1 className="text-4xl font-bold text-center">Counter App</h1>
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
  );
}

export default App;
