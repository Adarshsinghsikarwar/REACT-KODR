import React, { useContext } from "react";
import { Context } from "../utils/Context";

const Leaderboard = () => {
  const { userInfo } = useContext(Context);

  const sortedUsers = [...userInfo].sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    return a.moves - b.moves;
  });

  return (
    <div className="h-full w-full bg-gradient-to-b from-zinc-100 to-zinc-200 p-6 flex flex-col">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-zinc-700 text-center mb-2">
          Leaderboard
        </h1>
        <p className="text-sm text-zinc-500 text-center">
          Top players this week
        </p>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className=" text-black px-4 py-3 grid grid-cols-4 gap-2 font-bold text-sm">
            <div className="text-center">Rank</div>
            <div>Player</div>
            <div className="text-center">Score</div>
            <div className="text-center">Moves</div>
          </div>

          {sortedUsers.map((player, index) => {
            const rank = index + 1;
            return (
              <div
                key={index}
                className={`px-4 py-3 grid grid-cols-4 gap-2 items-center border-b border-zinc-100 hover:bg-zinc-50 transition-colors`}
              >
                <div className="text-center font-bold">
                  <span className="text-2xl"></span>
                </div>

                <div className="font-semibold text-zinc-700 truncate">
                  {player.name}
                </div>

                <div className="text-center">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-bold">
                    {player.score}
                  </span>
                </div>
                <div className="text-center text-zinc-600 text-sm font-medium">
                  {player.moves || 0}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-4 text-center">
        <p className="text-xs text-zinc-500">
          💡 Tip: Fewer moves = Higher rank
        </p>
      </div>
    </div>
  );
};

export default Leaderboard;
