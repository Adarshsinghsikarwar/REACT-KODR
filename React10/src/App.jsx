import Card from "./components/Card";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Result from "./components/Result";
import { useState } from "react";
const App = () => {
  const [info, setInfo] = useState({
    total: 0,
    active: 0,
    Completed: 0,
    Time: "00:00",
    average: 0,
    completion: 0,
  });

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  console.log(tasks);
  const addTask = (data) => {
    let arr = [...tasks, data];
    localStorage.setItem("tasks", JSON.stringify(arr));
    setTasks(arr);
  };

  return (
    <div className="min-h-screen max-w-[65%] mx-auto bg-[#FFFFFF]">
      <Header />
      <Card />
      <AddTask addTask={addTask} />
      <Result tasks = {tasks} />
    </div>
  );
};

export default App;
