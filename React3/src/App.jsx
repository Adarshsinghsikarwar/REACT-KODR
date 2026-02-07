import LayOut from "./components/LayOut";

const App = () => {
  const obj = {
    name: "Adarsh",
    email: "adarshsingh@gmail.com",
    role: "Student",
  };
  const sayHello = () => {
    console.log("Hello from adarsh");
  };
  return (
    <div className="h-screen w-full">
      <LayOut obj={obj} sayHello={sayHello} />
    </div>
  );
};

export default App;
