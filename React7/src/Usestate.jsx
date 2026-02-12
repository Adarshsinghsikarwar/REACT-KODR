import React from "react";

const Usestate = () => {
    // let [count, setcount] = useState(0)
  return (
    <div className="w-full h-screen bg-blue-100 flex flex-col gap-5 justify-center items-center">
      <h1 className="text-xl">{count}</h1>
      <button
        className="px-3 py-3 bg-zinc-300"
        onClick={() => {
          count = 2; // we can't change the state here. becuase it don't reflect the state data, for that we have async the state
          // console.log(count);
          setcount(count);
        }}
      >
        click me
      </button>
    </div>
  );
};

export default Usestate;
