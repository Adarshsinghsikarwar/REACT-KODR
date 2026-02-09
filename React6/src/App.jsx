import { useState } from "react";
import First from "./components/First";
import Second from "./components/Second";
import Thrid from "./components/Thrid";
import Fourth from "./components/Fourth";
const App = () => {
 
  return (
    <div className="h-screen w-full bg-[#F3F4F6] p-10">
      <div className="w-full flex gap-10">
        <First />
        <Second />
      </div>
      <div className="w-full flex gap-10 mt-10">
        <Thrid />
       <Fourth />
      </div>
    </div>
  );
};

export default App;
