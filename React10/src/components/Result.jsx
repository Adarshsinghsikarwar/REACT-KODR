const Result = ({ tasks }) => {
  return (
    <div className="px-10 py-10 flex flex-col gap-6">
      <div className=" flex justify-between items-center">
        <input
          className="bg-zinc-100 text-xl px-4 py-3 rounded-xl w-[60%]"
          type="text"
          placeholder="Search Tasks"
        />
        <div className="flex gap-3">
          <button className="px-10 py-2 rounded text-sm font-medium bg-zinc-400 ">
            All
          </button>
          <button className="px-10 py-2 rounded text-sm font-bold bg-zinc-400 ">
            Active
          </button>
          <button className="px-10 py-2 rounded text-sm font-medium bg-zinc-400 ">
            Complete
          </button>
        </div>
      </div>
      {tasks?.map((ele, idx) => (
        <div
          key={idx}
          className="flex flex-col rounded-xl px-5 py-5 bg-[#F1F1F1]"
        >
          <div className="text-2xl mt-2 font-medium flex gap-3 items-center">
            <input className="w-6 h-6" type="checkbox" />
            <h1>{ele.taskName}</h1>
          </div>
          <div className="px-8">
            <h1 className="text-[1.2rem] mb-3 font-semibold">
              {ele.taskDescription}
            </h1>
            <span className="px-4 mr-3 font-semibold py-1 bg-[#FAE2A8] rounded-xl">
              {ele.priority}
            </span>
            <span className="px-4 bg-zinc-200 rounded-xl font-semibold py-1"></span>
          </div>
          <div className="mt-6">
            <button
              onClick={() => {}}
              className="px-3 mr-4 py-1 text-xl rounded-sm bg-zinc-100"
            >
              ▶ Start
            </button>
            <button className="px-3 py-1 text-xl bg-[#F5DDDF] rounded-sm">
              🗑️
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Result;
