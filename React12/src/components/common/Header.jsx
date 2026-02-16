import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

const Header = () => {
  const { cart, Wishlist, mode, setMode } = useContext(TaskContext);
  return (
    <div
      className={`rounded-xl flex items-center justify-between px-10 py-7 shadow-sm transition-colors ${
        mode === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h1 className="text-3xl font-bold">🛒 Smart Store</h1>
      <div className="flex items-center gap-5">
        <p
          className={`text-sm font-medium px-4 py-2 rounded-xl transition-colors ${
            mode === "dark" ? "bg-gray-700 text-gray-200" : "bg-[#EFF2F8]"
          }`}
        >
          Cart : {cart.reduce((acc, curr) => acc + curr.quantity, 0)}
        </p>
        <p
          className={`text-sm font-medium px-4 py-2 rounded-xl transition-colors ${
            mode === "dark" ? "bg-gray-700 text-gray-200" : "bg-[#EFF2F8]"
          }`}
        >
          Wishlist : {Wishlist.reduce((acc, curr) => acc + curr.quantity, 0)}
        </p>
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={`text-sm font-medium px-4 py-2 rounded-xl transition-colors hover:shadow-md ${
            mode === "dark"
              ? "bg-yellow-500 text-gray-900 hover:bg-yellow-400"
              : "bg-gray-900 text-white hover:bg-gray-800"
          }`}
        >
          {mode === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
    </div>
  );
};

export default Header;
