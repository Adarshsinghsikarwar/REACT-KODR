import { useContext } from "react";
import Game from "./components/Game";
import Leaderboard from "./components/Leaderboard";
import SignIn from "./components/SignIn";
import { Context } from "./utils/Context";

const App = () => {
  const { toggle } = useContext(Context);

  return (
    <div className="h-screen w-full">
      {!toggle ? (
        <SignIn />
      ) : (
        <div className="h-full w-full flex justify-between">
          <div className="flex flex-col justify-center items-center w-2/3 h-full">
            <h1 className="text-4xl font-bold text-zinc-500 mb-5">
              Memory Card Game
            </h1>
            <Game />
          </div>
          <div className="h-full w-1/3">
            <Leaderboard />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
