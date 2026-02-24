import Navbar from "./components/Navbar";
import MainRoute from "./routing/MainRoute";
const App = () => {
  return (
    <div className="w-[70vw] mx-auto ">
      <Navbar />
      <MainRoute />
    </div>
  );
};

export default App;
