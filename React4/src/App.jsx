import { useState } from "react";

const App = () => {
  const [count, setcount] = useState(20);
  const [user, setuser] = useState({ name: "Adarsh" });

  let handleClick = () => {
    // user.name = "aryan";
    count = { name: "aryan" };
    console.log(count);
    setcount(count);
  };
  // let count = 0;
  // let p = document.querySelector("#p");
  // p.textContent = 7;
  return (
    <div>
      <h1>
        Count - <p id="p">{count}</p>
      </h1>
      <button
        onClick={() => {
          setcount(() => setcount((prev) => prev + 1));
          setcount(() => setcount((prev) => prev + 1));
          setcount(() => setcount((prev) => prev + 1));
          // setcount(count + 1);
          // setcount(count + 1);
          // setcount(count + 1);
          // setcount(count+1);
          
          // setcount(count+2);
          // setcount(count+3);
          // count++;
          // p.textContent = count;
          // console.log(p)
        }}
      ></button>
    </div>
  );
};

export default App;
