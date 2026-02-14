import React from "react";

const Card = ({ tasks, timers = {} }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((ele) => ele.isCompleted).length;

  const totalSeconds = Object.values(timers).reduce(
    (acc, curr) => acc + (curr.time || 0),
    0,
  );
  const avgSeconds = totalTasks > 0 ? totalSeconds / totalTasks : 0;
  const completionPercentage =
    totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  return (
    <div className="px-0 sm:px-0 py-6 grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
      <div className="flex flex-col gap-1 items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white shadow-lg shadow-indigo-200 dark:shadow-none transform hover:scale-[1.02] transition-transform">
        <h1 className="text-4xl font-extrabold">{totalTasks}</h1>
        <p className="text-sm font-medium opacity-90">Total Tasks</p>
      </div>
      <div className="flex flex-col gap-1 items-center justify-center p-6 rounded-2xl bg-white dark:bg-zinc-800 border border-slate-100 dark:border-zinc-700 shadow-sm hover:shadow-md transition-all">
        <h1 className="text-4xl font-extrabold text-orange-500">
          {tasks.filter((ele) => !ele.isCompleted).length}
        </h1>
        <p className="text-sm font-medium text-slate-500 dark:text-zinc-400">
          Active
        </p>
      </div>
      <div className="flex flex-col gap-1 items-center justify-center p-6 rounded-2xl bg-white dark:bg-zinc-800 border border-slate-100 dark:border-zinc-700 shadow-sm hover:shadow-md transition-all">
        <h1 className="text-4xl font-extrabold text-emerald-500">
          {completedTasks}
        </h1>
        <p className="text-sm font-medium text-slate-500 dark:text-zinc-400">
          Completed
        </p>
      </div>
      <div className="flex flex-col gap-1 items-center justify-center p-6 rounded-2xl bg-white dark:bg-zinc-800 border border-slate-100 dark:border-zinc-700 shadow-sm hover:shadow-md transition-all">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-700 dark:text-slate-200">
          {formatTime(totalSeconds)}
        </h1>
        <p className="text-sm font-medium text-slate-500 dark:text-zinc-400">
          Total Time
        </p>
      </div>
      <div className="flex flex-col gap-1 items-center justify-center p-6 rounded-2xl bg-white dark:bg-zinc-800 border border-slate-100 dark:border-zinc-700 shadow-sm hover:shadow-md transition-all">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-700 dark:text-slate-200">
          {formatTime(avgSeconds)}
        </h1>
        <p className="text-sm font-medium text-slate-500 dark:text-zinc-400">
          Avg Time/Task
        </p>
      </div>
      <div className="flex flex-col gap-1 items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-lg shadow-purple-200 dark:shadow-none transform hover:scale-[1.02] transition-transform">
        <h1 className="text-3xl font-extrabold">
          {Math.round(completionPercentage)}%
        </h1>
        <p className="text-sm font-medium opacity-90">Completion Rate</p>
      </div>
    </div>
  );
};

export default Card;
