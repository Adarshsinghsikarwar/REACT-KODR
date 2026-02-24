import React from "react";
import { useRef } from "react";

const App = () => {
  const inputRef = useRef(null);
  const focuInput = () => {
    inputRef.current.focus();
    console.log(inputRef.current.value)
  };
  return (
    <div>
      <input className="border-2" ref={inputRef} type="text" />
      <button onClick={focuInput}> Click me</button>
    </div>
  );
};

export default App;
