import { useState } from "react";
import { createContext } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      let temp = shuffled[i];
      shuffled[i] = shuffled[j];
      shuffled[j] = temp;
    }
    return shuffled;
  };

  const initialIcons = [
    "🍟",
    "🍟",
    "🍔",
    "🍔",
    "🍕",
    "🍕",
    "🍩",
    "🍩",
    "🍦",
    "🍦",
    "🎂",
    "🎂",
    "🍪",
    "🍪",
    "🍹",
    "🍹",
    "🧃",
    "🧃",
    "🥠",
    "🥠",
    "🍗",
    "🍗",
    "🥫",
    "🥫",
    "🌮",
    "🌮",
    "🍿",
    "🍿",
    "🍭",
    "🍭",
    "💣",
    "💣",
    "💣",
    "💣",
    "💣",
  ];
  const [userInfo, setUserInfo] = useState([
    {
      name: "Adarsh",
      score: 0,
      moves: 0,
      rank: 0,
      password: "123456",
    },
    {
      name: "Shubham",
      score: 0,
      moves: 0,
      rank: 0,
      password: "123456",
    },
    {
      name: "Rahul",
      score: 0,
      moves: 0,
      rank: 0,
      password: "123456",
    },
    {
      name: "Shivam",
      score: 0,
      moves: 0,
      rank: 0,
      password: "123456",
    },
  ]);
  const [toggle, setToggle] = useState(false);
  const [icons, setIcons] = useState(shuffleArray(initialIcons));
  const [moves, setMoves] = useState(0);
  const [firstBox, setFirstBox] = useState(null);
  const [secondBox, setSecondBox] = useState(null);
  const [score, setScore] = useState(0);

  const shuffleIcons = () => {
    setIcons(shuffleArray(initialIcons));
  };

  return (
    <Context.Provider
      value={{
        icons,
        score,
        setScore,
        setIcons,
        shuffleIcons,
        moves,
        setMoves,
        firstBox,
        setFirstBox,
        secondBox,
        setSecondBox,
        toggle,
        setToggle,
        userInfo,
        setUserInfo,
      }}
    >
      {children}
    </Context.Provider>
  );
};
