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
              className={`p-4 rounded-xl transition-shadow hover:shadow-lg w-full sm:w-72 flex flex-col justify-between ${
                mode === "dark"
                  ? "bg-gray-800 text-white"
                  : "bg-white text-gray-900 shadow-sm border border-gray-100"
              }`}
            >
              <div className="flex flex-col gap-3">
                <div className="w-full h-48 bg-white rounded-lg flex items-center justify-center p-4 overflow-hidden">
                  <img
                    src={ele.image}
                    alt={name}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <h1 className="text-xl font-bold truncate" title={name}>
                    {name}
                  </h1>
                  <p className="text-lg opacity-60 font-bold">₹{ele.price}</p>
                </div>
              </div>

              <div className="flex gap-2 mt-4">
                <button
                  disabled={isAdded}
                  onClick={() => {
                    setCart((prev) => [
                      ...prev,
                      {
                        name: name,
                        price: ele.price,
                        quantity: 1,
                        image: ele.image,
                      },
                    ]);
                  }}
                  className={`flex-1 font-bold rounded-lg py-2 text-sm text-white transition-opacity ${
                    isAdded
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-black hover:opacity-80"
                  }`}
                >
                  {isAdded ? "Added" : "Cart"}
                </button>
                <button
                  disabled={isAddedWishlist}
                  onClick={() => {
                    setWishlist((prev) => [
                      ...prev,
                      {
                        name: name,
                        price: ele.price,
                        quantity: 1,
                        image: ele.image,
                      },
                    ]);
                  }}
                  className={`flex-1 font-bold rounded-lg py-2 text-sm ${
                    isAddedWishlist
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-[#F3F3F3] text-black hover:bg-gray-200"
                  }`}
                >
                  {isAddedWishlist ? "Saved" : "Wishlist"}
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
