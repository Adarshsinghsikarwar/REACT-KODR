import React, { useContext, useState } from "react";

import { TaskContent } from "../Context";

const Product = () => {
  const { setCart, setWishlist, state, cart, Wishlist } =
    useContext(TaskContent);
  return (
    <div className=" flex flex-col gap-10">
      <h1 className="text-2xl font-bold">Products</h1>
      <div className="flex gap-2 ">
        {state.map((ele, idx) => {
          const name =
            ele.name || Object.keys(ele).find((key) => key !== "price");
          const isAdded = cart.some((c) => c.name === name);
          const isAddedWishlist = Wishlist.some((w) => w.name === name);

          return (
            <div key={idx} className="bg-white pr-20 pl-8 rounded-xl py-5">
              <h1 className="text-2xl font-bold mb-2">{name}</h1>
              <p className="text-xl text-black/60 font-bold mb-4">
                ₹{ele.price}
              </p>
              <div>
                <button
                  disabled={isAdded}
                  onClick={() => {
                    setCart((prev) => [
                      ...prev,
                      { name: name, price: ele.price, quantity: 1 },
                    ]);
                  }}
                  className={`px-7 mr-4 font-bold rounded-xl py-2 text-white ${
                    isAdded ? "bg-gray-400 cursor-not-allowed" : "bg-black"
                  }`}
                >
                  {isAdded ? "Added" : "Add To Cart"}
                </button>
                <button
                  disabled={isAddedWishlist}
                  onClick={() => {
                    setWishlist((prev) => [
                      ...prev,
                      { name: name, price: ele.price, quantity: 1 },
                    ]);
                  }}
                  className={`px-7 font-bold rounded-xl py-2 ${
                    isAddedWishlist
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-[#F3F3F3]"
                  }`}
                >
                  {isAddedWishlist ? "Added" : "Wishlist"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
