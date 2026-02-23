import React from "react";
import { useReducer } from "react";

const App = () => {
  const initialState = {
    count: 0,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-3">
      <h1 className="text-3xl">{state.count}</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
        onClick={() => dispatch({ type: "increment" })}
      >
        Increment
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer"
        onClick={() => dispatch({ type: "decrement" })}
      >
        Decrement
      </button>
    </div>
  );
};

export default App;
