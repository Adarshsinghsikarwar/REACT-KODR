import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Favorite from "./components/Favorite";
import { useContext } from "react";
import { Context } from "./utils/Context";
const App = () => {
  const { toggle } = useContext(Context);
  return (
    <div className="w-full">
      <Navbar />
      {/* <Home /> */}
      {toggle.Home && <Home />}
      {toggle.Cart && <Cart />}
      {toggle.Favorite && <Favorite />}
    </div>
  );
};

export default App;
