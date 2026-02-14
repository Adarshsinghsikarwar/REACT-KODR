import React, { useContext } from "react";
import { TaskContent } from "../Context";

const Header = () => {
  const { cart, Wishlist } = useContext(TaskContent);
  return (
    <div className="bg-[#FFFFFF] rounded-xl  flex items-center justify-between p-7">
      <h1 className="text-3xl font-bold">🛒 Smart Store</h1>
      <div className="flex items-center gap-5">
        <p className="text-sm font-medium px-4 py-2 rounded-xl bg-[#EFF2F8]  ">
          Cart : {cart.reduce((acc, curr) => acc + curr.quantity, 0)}
        </p>
        <p className="text-sm font-medium px-4 py-2 rounded-xl bg-[#EFF2F8]  ">
          Wishlist : {Wishlist.reduce((acc, curr) => acc + curr.quantity, 0)}
        </p>
        <button className="text-sm font-medium px-4 py-2 rounded-xl bg-[#EFF2F8]  ">
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default Header;
