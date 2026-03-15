import { useMemo } from "react";

const App = () => {
  const [number, setNumber] = useState(1);
  const [count, setCount] = useState(0);

  const make2x = useMemo(() => {
    for (let i = 0; i < 100; i++) {
      console.log("Calculating...");
    }
    return number * 2;
  }, [number]);
  return (
    <div>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <div>value : {number}</div>
      <div>2x value : {make2x}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        count : {count}
      </div>
    </div>
  );
};

export default App;
