import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";


const App = () => {
  return <div className="h-screen w-full bg-zinc-100">
    <Navbar/>
    <Outlet/>
  </div>;
};

export default App;
