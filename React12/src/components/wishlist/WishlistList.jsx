import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

const WishlistList = () => {
  const { Wishlist, setWishlist, setCart, cart, mode } =
    useContext(TaskContext);

  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-2xl font-bold">Wishlist ({Wishlist.length})</h1>
      {Wishlist.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Wishlist.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all flex flex-col gap-4 ${
                mode === "dark"
                  ? "bg-gray-800 text-white"
                  : "bg-white text-gray-900"
              }`}
            >
              <div className="flex justify-between items-center">
                <div
                  className={`h-12 w-12 rounded-full flex items-center justify-center text-xl font-bold ${
                    mode === "dark"
                      ? "bg-gray-700 text-gray-200"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {item.name.charAt(0).toUpperCase()}
                </div>
                <h2 className="text-xl font-bold">{item.name}</h2>
              </div>
              <p className="text-2xl font-bold opacity-80">
                ₹{item.price.toLocaleString()}
              </p>

              <div className="flex flex-col gap-3 mt-auto">
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

                    // Remove from wishlist
                    setWishlist((prev) =>
                      prev.filter(
                        (wishlistItem) => wishlistItem.name !== item.name,
                      ),
                    );
                  }}
                  className={`w-full py-3 rounded-xl font-bold transition-all active:scale-95 ${
                    mode === "dark"
                      ? "bg-white text-black hover:bg-gray-200"
                      : "bg-black text-white hover:bg-gray-800"
                  }`}
                >
                  Move to Cart
                </button>
                <button
                  onClick={() =>
                    setWishlist((prev) =>
                      prev.filter(
                        (wishlistItem) => wishlistItem.name !== item.name,
                      ),
                    )
                  }
                  className="w-full py-3 rounded-xl font-medium text-white bg-red-500 hover:bg-red-600 transition-colors active:scale-95"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 opacity-50 gap-4">
          <span className="text-6xl">✨</span>
          <h2 className="text-2xl font-medium">Your wishlist is empty</h2>
        </div>
      )}
    </div>
  );
};

export default WishlistList;
