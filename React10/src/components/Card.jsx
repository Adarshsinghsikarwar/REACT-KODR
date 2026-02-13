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
    <div className="px-10 py-10 flex flex-wrap gap-5">
      <div className="flex flex-col gap-2  items-center justify-center border w-[18%] py-5 rounded-xl">
        <h1 className="text-3xl font-bold">{totalTasks}</h1>
        <p className="text-xl font-medium">Total Tasks</p>
      </div>
      <div className="flex flex-col gap-2  items-center justify-center border w-[18%] py-5  rounded-xl">
        <h1 className="text-3xl font-bold">
          {tasks.filter((ele) => !ele.isCompleted).length}
        </h1>
        <p className="text-xl font-medium">Active</p>
      </div>
      <div className="flex flex-col gap-2  items-center justify-center border w-[18%] py-5  rounded-xl">
        <h1 className="text-3xl font-bold">{completedTasks}</h1>
        <p className="text-xl font-medium">Completed</p>
      </div>
      <div className="flex flex-col gap-2  items-center justify-center border w-[18%] py-5  rounded-xl">
        <h1 className="text-3xl font-bold">{formatTime(totalSeconds)}</h1>
        <p className="text-xl font-medium">Total Time</p>
      </div>
      <div className="flex flex-col gap-2  items-center justify-center border w-[18%] py-5  rounded-xl">
        <h1 className="text-3xl font-bold">{formatTime(avgSeconds)}</h1>
        <p className="text-xl font-medium">Avg/Task</p>
      </div>
      <div className="flex flex-col gap-2  items-center justify-center border w-[18%] py-5  rounded-xl">
        <h1 className="text-3xl font-bold">
          {Math.round(completionPercentage)}%
        </h1>
        <p className="text-xl font-medium">Completion</p>
      </div>
    </div>
  );
};

export default Card;
