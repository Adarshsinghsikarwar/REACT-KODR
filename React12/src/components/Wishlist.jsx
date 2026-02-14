import { useContext } from "react";
import { TaskContent } from "../Context";

const Wishlist = () => {
  const { Wishlist, setWishlist, setCart, cart, mode, setMode } =
    useContext(TaskContent);
  return (
    <div
      className={`min-h-screen px-6 py-10 transition-all duration-300 ${
        mode === "dark"
          ? "bg-gray-900 text-white"
          : "bg-[#F5F5F7] text-gray-900"
      }`}
    >
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl font-extrabold tracking-tight">
            Your Wishlist ({Wishlist.length})
          </h1>
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold transition-all shadow-sm ${
              mode === "dark"
                ? "bg-gray-800 text-yellow-400 hover:bg-gray-700 hover:text-yellow-300"
                : "bg-white text-gray-800 hover:shadow-md hover:bg-gray-50"
            }`}
          >
            {mode === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </button>
        </div>

        {Wishlist.length > 0 ? (
          <div className="grid grid-cols-1 gap-6">
            {Wishlist.map((item, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row justify-between items-center gap-6 ${
                  mode === "dark" ? "bg-gray-800" : "bg-white"
                }`}
              >
                <div className="flex items-center gap-6 w-full sm:w-auto">
                  <div
                    className={`h-16 w-16 rounded-2xl flex items-center justify-center text-3xl font-bold ${
                      mode === "dark"
                        ? "bg-gray-700 text-gray-200"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {item.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex flex-col">
                    <h2 className="text-xl font-bold mb-1">{item.name}</h2>
                    <p
                      className={`text-lg font-medium ${
                        mode === "dark" ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      ₹{item.price.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      const existingItem = cart.find(
                        (cartItem) => cartItem.name === item.name,
                      );

                      if (existingItem) {
                        setCart((prev) =>
                          prev.map((cartItem) =>
                            cartItem.name === item.name
                              ? { ...cartItem, quantity: cartItem.quantity + 1 }
                              : cartItem,
                          ),
                        );
                      } else {
                        setCart((prev) => [...prev, { ...item, quantity: 1 }]);
                      }

                      setWishlist((prev) =>
                        prev.filter(
                          (wishlistItem) => wishlistItem.name !== item.name,
                        ),
                      );
                    }}
                    className={`flex-1 sm:flex-none px-6 py-3 rounded-xl font-bold transition-transform active:scale-95 ${
                      mode === "dark"
                        ? "bg-white text-black hover:bg-gray-200"
                        : "bg-black text-white hover:bg-gray-800"
                    }`}
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() =>
                      setWishlist((prev) =>
                        prev.filter(
                          (wishlistItem) => wishlistItem.name !== item.name,
                        ),
                      )
                    }
                    className="flex-1 sm:flex-none px-6 py-3 rounded-xl font-medium text-white bg-red-500 hover:bg-red-600 transition-colors active:scale-95"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 opacity-50 gap-4">
            <span className="text-6xl">🛒</span>
            <h2 className="text-2xl font-medium">Your wishlist is empty</h2>
            <p>Start adding items you love!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
