import Home from "./components/Home";
import Chat from "./components/Chat";
import { Context } from "./utils/Context";
import { useContext } from "react";
const App = () => {
  const { toggle } = useContext(Context);
  return (
    <div className="h-screen w-full flex items-center justify-center p-6">
      {toggle ? <Chat /> : <Home />}
    </div>
  );
};

export default App;
