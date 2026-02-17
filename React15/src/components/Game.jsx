import { useContext, useEffect, useState } from "react";
import { Context } from "../utils/Context";
import Box from "./box";

const Game = () => {
  const {
    score,
    setScore,
    icons,
    shuffleIcons,
    moves,
    setMoves,
    firstBox,
    setFirstBox,
    secondBox,
    setSecondBox,
    setUserInfo,
  } = useContext(Context);

  const [matched, setMatched] = useState([]);
  const [isComparing, setIsComparing] = useState(false);

  const handleBoxClick = (id) => {
    if (isComparing || matched.includes(id)) return;

    if (firstBox === id) return;

    if (firstBox === null) {
      setFirstBox(id);
    } else if (secondBox === null) {
      setSecondBox(id);
      setMoves(moves + 1);
    }
  };

  // Check for bomb on ANY box click (first or second)
  useEffect(() => {
    if (firstBox !== null && icons[firstBox] === "💣") {
      setTimeout(() => {
        alert("Game Over! You hit a bomb 💣💥");
        handleRestart();
      }, 500);
      return;
    }
    if (secondBox !== null && icons[secondBox] === "💣") {
      setTimeout(() => {
        alert("Game Over! You hit a bomb 💣💥");
        handleRestart();
      }, 500);
    }
  }, [firstBox, secondBox, icons]);

  // Check for match when both boxes are selected
  useEffect(() => {
    if (firstBox !== null && secondBox !== null) {
      setIsComparing(true);

      const firstIcon = icons[firstBox];
      const secondIcon = icons[secondBox];

      if (firstIcon === secondIcon) {
        // Match found! Keep them visible
        setTimeout(() => {
          setScore((prev) => prev + 1); // Use functional update
          setMatched((prev) => [...prev, firstBox, secondBox]); // Use functional update
          setFirstBox(null);
          setSecondBox(null);
          setIsComparing(false);
        }, 800);
      } else {
        // No match - hide after delay
        setTimeout(() => {
          setFirstBox(null);
          setSecondBox(null);
          setIsComparing(false);
        }, 1000);
      }
    }
  }, [firstBox, secondBox, icons]);

  // Restart game
  const handleRestart = () => {
    setScore(0);
    setFirstBox(null);
    setSecondBox(null);
    setMatched([]);
    setMoves(0);
    setIsComparing(false);
    shuffleIcons();
  };

  const loggedInUser = JSON.parse(localStorage.getItem("LoggedInUser") || "{}");

  useEffect(() => {
    if (loggedInUser.name) {
      setUserInfo((prev) =>
        prev.map((user) =>
          user.name === loggedInUser.name
            ? { ...user, score: score, moves: moves }
            : user,
        ),
      );
    }
  }, [score, moves]);

  useEffect(() => {
    if (score === 15) {
      setTimeout(() => {
        alert("You win! 🎉🎉🎉🎉");
        handleRestart();
      }, 500);
    }
  }, [score]);

  return (
    <div className="bg-zinc-200 p-6 rounded-xl shadow-2xl max-w-2xl">
      <div className="bg-white rounded-lg p-4 mb-6 shadow-md">
        <div className="flex justify-between items-center gap-4">
          {/* Moves Counter */}
          <div className="flex flex-col items-center">
            <span className="text-sm text-zinc-500 font-medium">Moves</span>
            <span className="text-2xl font-bold text-blue-600">{moves}</span>
          </div>

          {/* Score Counter */}
          <div className="flex flex-col items-center">
            <span className="text-sm text-zinc-500 font-medium">Score</span>
            <span className="text-2xl font-bold text-green-600">{score}</span>
          </div>

          {/* Restart Button */}
          <button
            onClick={handleRestart}
            className="px-6 py-2 bg-gradient-to-r from-zinc-600 to-zinc-700 text-white font-bold rounded-lg hover:from-zinc-700 hover:to-zinc-800 transition-all transform hover:scale-105 active:scale-95 shadow-md"
          >
            🔄 Restart
          </button>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-3">
        {icons.map((icon, index) => (
          <Box
            key={index}
            id={index}
            icon={icon}
            isFlipped={
              firstBox === index ||
              secondBox === index ||
              matched.includes(index)
            }
            isMatched={matched.includes(index)}
            onClick={handleBoxClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Game;
