import { useContext } from "react";
import { Context } from "../utils/Context";

const Home = () => {
  const { setToggle, users, setLoginUser, loginUser } = useContext(Context);
  return (
    <div className="glass-effect w-[85%] max-w-6xl flex flex-col gap-8 rounded-3xl p-10 shadow-2xl animate-scaleIn">
      <div className="animate-fadeIn">
        <h1
          className="text-6xl font-bold text-center mb-3 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Chat Group
        </h1>
        <p className="text-center text-2xl text-gray-600 font-medium">
          Select a Person Login
        </p>
      </div>

      <div className="flex flex-wrap gap-6 justify-center">
        {users.map((user) => (
          <div
            key={user.id}
            onClick={() => {
              setLoginUser(user);
            }}
            className="w-[20vw] min-w-[200px] bg-white rounded-2xl flex flex-col items-center justify-center p-6 gap-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-purple-100 animate-fadeIn stagger-1"
          >
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center text-5xl shadow-lg"
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              }}
            >
              {user.avatar}
            </div>
            <p
              className="text-2xl font-bold text-gray-800"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {user.name}
            </p>
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-400 to-green-500 text-white rounded-full shadow-md">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              <p className="text-sm font-semibold">
                {user.time - new Date().getTime() < 60000
                  ? "Online"
                  : "Offline"}
              </p>
            </div>
            <p className="text-lg font-medium text-gray-500">{user.time}</p>
          </div>
        ))}
      </div>

      <button
        onClick={() => {
          setToggle(true);
        }}
        className={`text-xl ${loginUser ? "" : "opacity-50 cursor-not-allowed"}  font-semibold py-4 px-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 mx-auto animate-slideUp`}
      >
        Login as Alice
      </button>
    </div>
  );
};

export default Home;
