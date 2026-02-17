import React from "react";

const Box = ({ id, icon, isFlipped, isMatched, onClick }) => {
  const handleClick = () => {
    onClick(id);
  };

  return (
    <div
      onClick={handleClick}
      className={`h-24 w-24 text-4xl cursor-pointer flex items-center justify-center rounded transition-all duration-300 ${
        isMatched
          ? "bg-green-400 scale-105 cursor-default shadow-lg"
          : isFlipped
            ? "bg-blue-400 scale-105"
            : "bg-blue-200 hover:bg-blue-300 hover:scale-105"
      }`}
    >
      {isFlipped ? icon : ""}
    </div>
  );
};

export default Box;
