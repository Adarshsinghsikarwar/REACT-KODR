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
    <div className="py-8 flex flex-col gap-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="relative w-full md:w-[60%]">
          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400">
            🔍
          </span>
          <input
            onChange={searchTask}
            className="w-full bg-white dark:bg-zinc-800 text-slate-800 dark:text-zinc-100 text-lg pl-12 pr-5 py-3 rounded-2xl outline-none border border-slate-200 dark:border-zinc-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-900 transition-all shadow-sm"
            type="text"
            placeholder="Search tasks..."
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2 bg-slate-100 dark:bg-zinc-800/50 p-1.5 rounded-xl">
          <button
            onClick={allTask}
            className="px-5 py-2 rounded-lg text-sm font-semibold transition-all hover:bg-white dark:hover:bg-zinc-700 hover:shadow-sm focus:bg-white dark:focus:bg-zinc-700 text-slate-600 dark:text-slate-300 shadow-sm bg-white dark:bg-zinc-700 text-indigo-600 dark:text-indigo-400"
          >
            All
          </button>
          <button
            onClick={activeTask}
            className="px-5 py-2 rounded-lg text-sm font-semibold transition-all hover:bg-white dark:hover:bg-zinc-700 hover:shadow-sm text-slate-600 dark:text-slate-300"
          >
            Active
          </button>
          <button
            onClick={completeTask}
            className="px-5 py-2 rounded-lg text-sm font-semibold transition-all hover:bg-white dark:hover:bg-zinc-700 hover:shadow-sm text-slate-600 dark:text-slate-300"
          >
            Completed
          </button>
          {tasks.filter((ele) => ele.isCompleted).length > 0 && (
            <button
              onClick={clearCompletedTask}
              className="px-4 py-2 rounded-lg text-sm font-semibold text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
            >
              Clear Done
            </button>
          )}
        </div>
      </div>

      <div className="grid gap-4">
        {tasks.length > 0 ? (
          tasks?.map((ele) => (
            <div
              key={ele.id}
              className={`group relative flex flex-col md:flex-row gap-5 p-6 rounded-2xl transition-all duration-300 border ${
                ele.isCompleted
                  ? "bg-slate-50 dark:bg-zinc-900/30 border-slate-100 dark:border-zinc-800 opacity-75 grayscale-[0.5]"
                  : "bg-white dark:bg-zinc-800 border-slate-100 dark:border-zinc-700 shadow-sm hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-900"
              }`}
            >
              <div className="flex-1 flex flex-col gap-3">
                <div className="flex items-start gap-4">
                  <div className="pt-1">
                    <input
                      onClick={() => completedTask(ele.id)}
                      className="w-6 h-6 rounded-full cursor-pointer accent-indigo-500 transition-transform hover:scale-110"
                      type="checkbox"
                      checked={ele.isCompleted}
                      readOnly
                    />
                  </div>
                  <div className="flex-1">
                    <h1
                      className={`text-xl font-bold break-words leading-tight ${
                        ele.isCompleted
                          ? "line-through text-slate-400 dark:text-zinc-500"
                          : "text-slate-800 dark:text-slate-100"
                      }`}
                    >
                      {ele.taskName}
                    </h1>
                    <p
                      className={`text-base mt-2 break-words leading-relaxed ${
                        ele.isCompleted
                          ? "line-through text-slate-400 dark:text-zinc-500"
                          : "text-slate-600 dark:text-slate-300"
                      }`}
                    >
                      {ele.taskDescription}
                    </p>
                  </div>
                </div>

                <div className="pl-10 flex flex-wrap gap-3 mt-1">
                  <span
                    className={`px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider ${
                      ele.priority === "High"
                        ? "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                        : ele.priority === "Medium"
                          ? "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400"
                          : "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400"
                    }`}
                  >
                    {ele.priority} Priority
                  </span>
                  <span className="px-3 py-1 bg-slate-100 dark:bg-zinc-700/50 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-300 flex items-center gap-1">
                    ⏱ {formatTime(timers[ele.id]?.time)}
                  </span>
                </div>
              </div>

              <div className="flex md:flex-col items-center md:justify-center gap-3 pl-10 md:pl-0 pt-2 md:pt-0 md:border-l md:border-slate-100 dark:md:border-zinc-700 md:ml-2 w-full md:w-auto">
                <button
                  onClick={() => toggleTimer(ele.id)}
                  disabled={ele.isCompleted}
                  className={`flex-1 md:flex-none w-full md:w-32 px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                    ele.isCompleted
                      ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                      : timers[ele.id]?.isRunning
                        ? "bg-amber-100 text-amber-600 hover:bg-amber-200 dark:bg-amber-900/20 dark:text-amber-400"
                        : "bg-indigo-50 text-indigo-600 hover:bg-indigo-100 dark:bg-indigo-900/20 dark:text-indigo-400"
                  }`}
                >
                  {timers[ele.id]?.isRunning ? "⏸ Pause" : "▶ Start"}
                </button>
                <button
                  onClick={() => removeTask(ele.id)}
                  className="flex-1 md:flex-none w-full md:w-32 px-4 py-2 rounded-xl text-sm font-bold bg-red-50 text-red-500 hover:bg-red-100 dark:bg-red-900/10 dark:hover:bg-red-900/20 transition-all flex items-center justify-center gap-2"
                >
                  <span className="text-lg">🗑️</span> Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-20 px-4 text-center bg-slate-50 dark:bg-zinc-900/30 rounded-3xl border-2 border-dashed border-slate-200 dark:border-zinc-700">
            <div className="text-6xl mb-4 opacity-50">📝</div>
            <h2 className="text-2xl font-bold text-slate-700 dark:text-slate-200">
              No Tasks Found
            </h2>
            <p className="text-slate-500 dark:text-zinc-400 mt-2">
              Get started by adding a new task above!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Result;
