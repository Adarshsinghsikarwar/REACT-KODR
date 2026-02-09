import { useState } from "react";
const Second = () => {
  const [Name, setName] = useState("Adarsh");
  return (
    <div className="w-[48%] h-[44vh] flex flex-col gap-5 rounded-xl bg-[#FFFFFF] p-6">
      <h1 className="text-2xl font-medium">Name Card</h1>
      <h1 className="text-2xl font-medium">{Name}</h1>
      <button
        onClick={() => setName("React Master 🚀")}
        className="w-fit px-5 py-2 bg-[#00CC5D] rounded"
      >
        Change Name
      </button>
    </div>
  );
};

export default Second;
