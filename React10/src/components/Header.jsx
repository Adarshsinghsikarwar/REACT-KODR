import React from "react";

const Header = ({ tasks, darkMode, setDarkMode }) => {
  return (
    <div
      className={`px-6 py-6 sm:px-10 sm:py-8 flex justify-between items-center rounded-2xl mb-8 transition-all duration-300 shadow-lg ${
        darkMode
          ? "bg-zinc-800/50 backdrop-blur-md border border-zinc-700/50 text-white"
          : "bg-white/80 backdrop-blur-md border border-white/20 text-slate-800 shadow-slate-200/50"
      }`}
    >
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Task Manager
        </h1>
        <p
          className={`text-sm mt-1 font-medium ${darkMode ? "text-zinc-400" : "text-slate-500"}`}
        >
          Manage your daily goals efficiently
        </p>
      </div>

      <div className="flex items-center gap-4 sm:gap-6">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`relative w-14 h-8 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
            darkMode
              ? "bg-zinc-700 ring-offset-zinc-900"
              : "bg-slate-200 ring-offset-white"
          }`}
          aria-label="Toggle Dark Mode"
        >
          <span
            className={`absolute top-1 left-1 w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center text-xs ${
              darkMode
                ? "translate-x-6 bg-indigo-500 text-white"
                : "translate-x-0 bg-white text-amber-500"
            }`}
          >
            {darkMode ? "🌙" : "☀️"}
          </span>
        </button>
        <div
          className={`px-4 py-2 rounded-xl text-sm font-bold shadow-sm transition-all duration-300 border ${
            darkMode
              ? "bg-zinc-800 border-zinc-700 text-indigo-400"
              : "bg-indigo-50 border-indigo-100 text-indigo-600"
          }`}
        >
          Tasks: {tasks.length}
        </div>
      </div>
    </div>
  );
};

export default Header;
