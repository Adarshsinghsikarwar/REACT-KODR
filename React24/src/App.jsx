import Child1 from "./components/child1";
import Child2 from "./components/child2";
import react, { useCallback } from "react";
const App = () => {
  const [count, setCount] = react.useState(0);
  const [child1, setChild1] = react.useState(0);
  const [child2, setChild2] = react.useState(0);

  const child1Click = useCallback(() => {
    setChild1(child1 + 1);
  }, [child1]);
  const child2Click = useCallback(() => {
    setChild2(child2 + 1);
  }, [child2]);

  console.log("Parent rendering");
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div>
        <h1 className="text-2xl text-center">{count}</h1>
        <button
          className="text-2xl px-4 py-1 bg-green-500 rounded-lg"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
      </div>
      <div>
        <Child1 child1Click={child1Click} child1={child1} />
        {/* <button
          className="text-3xl px-3 py-1 bg-zinc-200"
          onClick={child1Click}
        >
          {" "}
          change child1
        </button> */}
        <Child2 child2Click={child2Click} child2={child2} />
        {/* <button
          className="text-3xl px-3 py-1 bg-zinc-200"
          onClick={child2Click}
        >
          {" "}
          change child2
        </button> */}
      </div>
    </div>
  );
};

export default App;
