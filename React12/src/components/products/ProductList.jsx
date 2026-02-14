import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

const ProductList = () => {
  const { setCart, setWishlist, state, cart, Wishlist, mode } =
    useContext(TaskContext);

  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-2xl font-bold">Products</h1>
      <div className="flex flex-wrap gap-6">
        {state.map((ele, idx) => {
          const name =
            ele.name || Object.keys(ele).find((key) => key !== "price");
          const isAdded = cart.some((c) => c.name === name);
          const isAddedWishlist = Wishlist.some((w) => w.name === name);

          return (
            <div
              key={idx}
              className={`pr-20 pl-8 rounded-xl py-5 transition-shadow hover:shadow-lg ${
                mode === "dark"
                  ? "bg-gray-800 text-white"
                  : "bg-white text-gray-900 shadow-sm"
              }`}
            >
              <h1 className="text-2xl font-bold mb-2">{name}</h1>
              <p className="text-xl opacity-60 font-bold mb-4">₹{ele.price}</p>
              <div className="flex gap-4">
                <button
                  disabled={isAdded}
                  onClick={() => {
                    setCart((prev) => [
                      ...prev,
                      { name: name, price: ele.price, quantity: 1 },
                    ]);
                  }}
                  className={`px-7 font-bold rounded-xl py-2 text-white transition-opacity ${
                    isAdded
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-black hover:opacity-80"
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
                      : "bg-[#F3F3F3] text-black hover:bg-gray-200"
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

export default ProductList;
