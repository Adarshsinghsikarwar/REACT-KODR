import { useState } from "react";
import { useForm } from "react-hook-form";

const Login = ({ setToggle }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleFormSubmit = (data) => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = storedUsers.find((u) => u.email === data.email);
    if (!user) {
      alert("User not found");
      return;
    }
    if (user.password !== data.password) {
      alert("Password incorrect");
      return;
    }
    alert("user logged in");
    setLoggedInUser(user);
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="bg-white p-10 rounded-lg shadow-lg w-[80%]">
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="flex flex-col items-center gap-5"
        >
          <h1 className="text-3xl font-medium mb-2">Login Form</h1>

          <div className="w-full">
            <input
              {...register("email", { required: true })}
              className="px-4 py-2 border rounded-md text-xl placeholder:text-base outline-none w-full"
              type="email"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">Email is required</p>
            )}
          </div>

          <div className="w-full">
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "At least 6 character",
                },
              })}
              className="px-4 py-2 border rounded-md text-xl placeholder:text-base outline-none w-full"
              type="password"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <input
            className="px-5 py-2 rounded-md bg-blue-500 text-white font-semibold cursor-pointer hover:bg-blue-600 transition-colors w-full"
            type="submit"
            value="Login"
          />
        </form>
        <div className="mt-5 text-center">
          <h1>
            Don't have an account?{" "}
            <span
              onClick={() => setToggle((prev) => !prev)}
              className="text-blue-500 font-bold cursor-pointer hover:underline"
            >
              Register
            </span>
          </h1>
        </div>
      </div>

      {loggedInUser && (
        <div className="bg-white p-10 rounded-lg shadow-lg w-[80%] text-center">
          <h2 className="text-xl font-bold mb-4 text-green-600">
            Login Successful!
          </h2>
          <div className="text-left space-y-2">
            <p>
              <span className="font-semibold">Name:</span> {loggedInUser.name}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {loggedInUser.email}
            </p>
            <p>
              <span className="font-semibold">Mobile:</span>{" "}
              {loggedInUser.mobile}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
