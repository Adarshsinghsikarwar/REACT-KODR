import { useState, useContext } from "react";
import { Context } from "../utils/Context";

const SignIn = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { setToggle, userInfo } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && password) {
      // Find user in userInfo
      const isExist = userInfo.find(
        (item) => item.name === name && item.password === password,
      );

      if (isExist) {
        alert("User Logged In successfully 🎉🎉🎉🎉");
        localStorage.setItem("LoggedInUser", JSON.stringify(isExist));
        setToggle(true);
      } else {
        alert("User Not Found ❌\nTry: Name: Adarsh, Password: 123456");
      }
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4">
      {/* Sign In Card */}
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Memory Card Game
          </h1>
          <p className="text-gray-500">Sign in to play and compete!</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Player Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-zinc-600 hover:bg-zinc-700 text-white font-bold py-3 px-6 rounded-lg transform hover:scale-105 active:scale-95 transition-all shadow-lg"
          >
            Sign In & Play
          </button>
        </form>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg border ">
          <p className="text-xl text-blue-800 text-center font-medium">
            Demo Account
          </p>
          <p className="text-xl text-blue-600 text-center mt-1">
            Name: <span className="font-bold">Adarsh</span> | Password:{" "}
            <span className="font-bold">123456</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
