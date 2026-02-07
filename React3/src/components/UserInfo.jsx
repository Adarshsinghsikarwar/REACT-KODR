import React from "react";

const UserInfo = ({ obj, sayHello }) => {
  return (
    <div className="h-[30vh]  w-[95%] border rounded px-5 py-5 mt-3">
      <h1 className="text-xl font-bold">Name : Adarsh</h1>
      <h1 className="text-xl font-bold">Email : adarsh@gmail.com</h1>
      <h1 className="text-xl font-bold">Role : Student</h1>
      <button
        onClick={() => sayHello()}
        className="px-4 py-2 bg-zinc-400 rounded-xl mt-3"
      >
        Click Me
      </button>
    </div>
  );
};

export default UserInfo;
