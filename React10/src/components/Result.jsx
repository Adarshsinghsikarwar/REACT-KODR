import React from "react";

const Result = ({
  tasks,
  removeTask,
  completedTask,
  activeTask,
  allTask,
  completeTask,
  clearCompletedTask,
  searchTask,
  timers,
  toggleTimer,
}) => {
  const formatTime = (seconds) => {
    if (!seconds) return "0:00";
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  return (
    <div className="px-4 md:px-10 py-10 flex flex-col gap-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <input
          onChange={searchTask}
          className="bg-zinc-100 text-xl px-4 py-3 rounded-xl w-full md:w-[60%]"
          type="text"
          placeholder="Search Tasks"
        />
        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          <button
            onClick={allTask}
            className="px-6 py-2 rounded text-sm font-medium bg-zinc-400 "
          >
            All
          </button>
          <button
            onClick={activeTask}
            className="px-6 py-2 rounded text-sm font-bold bg-zinc-400 "
          >
            Active
          </button>
          <button
            onClick={completeTask}
            className="px-6 py-2 rounded text-sm font-medium bg-zinc-400 "
          >
            Complete
          </button>
          <button
            onClick={clearCompletedTask}
            className={`px-6 py-2 rounded text-sm font-medium bg-zinc-400 ${tasks.filter((ele) => ele.isCompleted).length === 0 ? "hidden" : ""}`}
          >
            Clear Completed
          </button>
        </div>
      </div>
      {tasks.length > 0 ? (
        tasks?.map((ele) => (
          <div
            key={ele.id}
            className={`flex flex-col rounded-xl px-5 py-5 bg-[#F1F1F1] ${ele.isCompleted ? "bg-zinc-400/90" : ""}`}
          >
            <div className="text-2xl mt-2 font-medium flex gap-3 items-center">
              <input
                onClick={() => completedTask(ele.id)}
                className="w-6 h-6 shrink-0"
                type="checkbox"
                defaultChecked={ele.isCompleted}
              />
              <h1
                className={`${ele.isCompleted ? "line-through" : ""} break-words`}
              >
                {ele.taskName}
              </h1>
            </div>
            <div className="px-2 md:px-8">
              <h1
                className={`text-[1.2rem] mb-3 font-semibold break-words ${ele.isCompleted ? "line-through" : ""}`}
              >
                {ele.taskDescription}
              </h1>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 font-semibold py-1 bg-[#FAE2A8] rounded-xl">
                  {ele.priority}
                </span>
                <span className="px-4 bg-zinc-200 rounded-xl font-semibold py-1 ">
                  {formatTime(timers[ele.id]?.time)}
                </span>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              <button
                onClick={() => toggleTimer(ele.id)}
                disabled={ele.isCompleted}
                className={`px-3 py-1 text-xl rounded-sm bg-zinc-100 ${ele.isCompleted ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {timers[ele.id]?.isRunning ? "Stop" : "▶ Start"}
              </button>
              <button
                onClick={() => removeTask(ele.id)}
                className="px-3 py-1 text-xl bg-[#F5DDDF] rounded-sm"
              >
                🗑️
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center text-3xl font-bold bg-[#F1F1F1] px-10 py-10 rounded-xl">
          No Task Found
        </div>
      )}
    </div>
  );
};

export default Result;
