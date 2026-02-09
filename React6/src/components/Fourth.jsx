import { useState } from "react";
const Fourth = () => {
  const [state, setstate] = useState(false);
  return (
    <div className="w-[48%] h-[44vh] flex flex-col gap-3 rounded-xl bg-[#FFFFFF] p-6">
      <h1 className="text-2xl font-medium">Visibility Card</h1>
      <button
        className="bg-[#FFAE00] text-white w-fit text-xl font-medium px-5 py-2  rounded"
        onClick={() => setstate(!state)}
      >
        Show Message
      </button>
      <p
        className={`bg-[#EDF6FF] px-4 py-5 rounded-xl ${
          state ? "block" : "hidden"
        }`}
      >
        🚀 This message is controlled by useState boolean value.
      </p>
    </div>
  );
};

export default Fourth;
