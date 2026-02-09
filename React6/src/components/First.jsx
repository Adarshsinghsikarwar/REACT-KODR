import { useState } from "react";
const First = () => {
  const [val, setval] = useState(0);

  return (
    <div className="w-[48%] h-[44vh] flex flex-col gap-3 rounded-xl bg-[#FFFFFF] p-6">
      <h1 className="text-2xl font-medium">Counter Card</h1>
      <h1 className="text-2xl font-medium">{val}</h1>
      <div className="flex gap-2 items-center">
        <button
          onClick={() => setval((pre) => pre + 1)}
          className="px-5 py-1 rounded text-xl text-white bg-[#0081FF]"
        >
          +
        </button>
        <button
          onClick={() => setval((prev) => (prev != 0 ? prev - 1 : 0))}
          className="px-5 py-1 rounded text-xl text-white  bg-[#FF000F]"
        >
          -
        </button>
        <button
          onClick={() => setval(0)}
          className="px-5 py-1 rounded text-xl text-white  bg-[#677282]"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default First;
