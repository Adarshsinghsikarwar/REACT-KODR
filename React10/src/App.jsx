import Card from "./components/Card";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Result from "./components/Result";
import { useState, useRef, useEffect } from "react";
const App = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [],
  );
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [timers, setTimers] = useState({});
  const intervalsRef = useRef({});

  useEffect(() => {
    return () => {
      Object.values(intervalsRef.current).forEach(clearInterval);
    };
  }, []);

  const toggleTimer = (id) => {
    if (timers[id]?.isRunning) {
      clearInterval(intervalsRef.current[id]);
      setTimers((prev) => ({
        ...prev,
        [id]: { ...prev[id], isRunning: false },
      }));
    } else {
      setTimers((prev) => ({
        ...prev,
        [id]: { ...prev[id], isRunning: true, time: prev[id]?.time || 0 },
      }));
      intervalsRef.current[id] = setInterval(() => {
        setTimers((prev) => ({
          ...prev,
          [id]: {
            ...prev[id],
            time: (prev[id]?.time || 0) + 1,
            isRunning: true,
          },
        }));
      }, 1000);
    }
  };

  console.log(tasks);

  const addTask = (data) => {
    data = { ...data, id: Date.now() }; // ensuring unique ID
    let arr = [...tasks, data];
    localStorage.setItem("tasks", JSON.stringify(arr));
    setTasks(arr);
  };
  const removeTask = (idx) => {
    if (intervalsRef.current[idx]) {
      clearInterval(intervalsRef.current[idx]);
      delete intervalsRef.current[idx];
    }
    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks.filter((ele) => ele.id !== idx)),
    );
    setTasks(tasks.filter((ele) => ele.id !== idx));
  };

  const completedTask = (idx) => {
    const updatedTasks = tasks.map((ele) =>
      ele.id === idx ? { ...ele, isCompleted: !ele.isCompleted } : ele,
    );
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  };

  const activeTask = () => {
    setFilter("active");
  };

  const allTask = () => {
    setFilter("all");
  };

  const completeTask = () => {
    setFilter("complete");
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesFilter =
      filter === "all"
        ? true
        : filter === "active"
          ? !task.isCompleted
          : task.isCompleted;
    const matchesSearch = task.taskName.toLowerCase().includes(searchQuery);
    return matchesFilter && matchesSearch;
  });

  const clearCompletedTask = () => {
    const keeps = tasks.filter((ele) => !ele.isCompleted);
    // clean up timers for completed tasks being designated for removal if any
    tasks
      .filter((ele) => ele.isCompleted)
      .forEach((task) => {
        if (intervalsRef.current[task.id]) {
          clearInterval(intervalsRef.current[task.id]);
          delete intervalsRef.current[task.id];
        }
      });

    setTasks(keeps);
    localStorage.setItem("tasks", JSON.stringify(keeps));
  };

  const searchTask = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  return (
    <div className="min-h-screen max-w-[65%] mx-auto bg-[#FFFFFF]">
      <Header />
      <Card tasks={tasks} timers={timers} />
      <AddTask addTask={addTask} />
      <Result
        tasks={filteredTasks}
        removeTask={removeTask}
        completedTask={completedTask}
        activeTask={activeTask}
        allTask={allTask}
        completeTask={completeTask}
        clearCompletedTask={clearCompletedTask}
        searchTask={searchTask}
        timers={timers}
        toggleTimer={toggleTimer}
      />
    </div>
  );
};

export default App;
