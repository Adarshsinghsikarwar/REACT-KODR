import { useState } from "react";
const Thrid = () => {
  const [user, setuser] = useState({ name: "Adarsh", Role: "Student" });
  return (
    <div className="w-[48%] h-[44vh] flex flex-col gap-3 rounded-xl bg-[#FFFFFF] p-6">
      <h1 className="text-2xl font-medium">User Card</h1>
      <h1 className="text-sm font-medium">Name : {user.name}</h1>
      <h1 className="text-sm font-medium">Role : {user.Role}</h1>
      <button
        className="bg-[#FFAE00] text-white w-fit px-5 py-2  rounded"
        onClick={() => setuser({ ...user, Role: "Admin" })}>
        Promote to Admin
      </button>
    </div>
  );
};

export default Thrid;
