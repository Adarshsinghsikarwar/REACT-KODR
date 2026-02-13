import { useState } from "react";
import { useForm } from "react-hook-form";
const Register = ({ setToggle }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [users, setusers] = useState([]);

  const handleFormSubmit = (data) => {
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = [...existingUsers, data];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setusers(updatedUsers);
    reset();
    setToggle(true);
  };

  return (
    <div className="bg-white p-10 rounded-lg shadow-lg w-[30%]">
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex flex-col items-center gap-5"
      >
        <h1 className="text-3xl font-medium mb-2">Register Form</h1>
        <input
          {...register("name", { required: "Name is required" })}
          className="px-4 py-2 border rounded-md text-xl placeholder:text-base outline-none w-full"
          type="text"
          placeholder="Name"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
        <input
          {...register("mobile", { required: "Mobile is required" })}
          className="px-4 py-2 border rounded-md text-xl placeholder:text-base outline-none w-full"
          type="number"
          placeholder="Mobile"
        />
        {errors.mobile && (
          <p className="text-red-500 text-sm">{errors.mobile.message}</p>
        )}
        <input
          {...register("email", { required: "Email is required" })}
          className="px-4 py-2 border rounded-md text-xl placeholder:text-base outline-none w-full"
          type="email"
          placeholder="Email"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
          })}
          className="px-4 py-2 border rounded-md text-xl placeholder:text-base outline-none w-full"
          type="password"
          placeholder="Password"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
        <input
          className="px-5 py-2 rounded-md bg-blue-500 text-white font-semibold cursor-pointer hover:bg-blue-600 transition-colors w-full"
          type="submit"
          value="Register"
        />
      </form>
      <div className="mt-5 text-center">
        <h1>
          Already have an account?{" "}
          <span
            onClick={() => setToggle(true)}
            className="text-blue-500 font-bold cursor-pointer hover:underline"
          >
            Login
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Register;
