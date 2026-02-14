import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const MainLayout = ({ children }) => {
  const { mode } = useContext(TaskContext);
  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-300 ${
        mode === "dark"
          ? "bg-gray-900 text-white"
          : "bg-[#F4F7FB] text-gray-900"
      } px-4 py-8 md:px-20 md:py-10 flex flex-col gap-12`}
    >
      {children}
    </div>
  );
};

export default MainLayout;
