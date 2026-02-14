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
              className={`p-4 rounded-xl transition-shadow hover:shadow-lg flex flex-col justify-between ${
                mode === "dark"
                  ? "bg-gray-800 text-white"
                  : "bg-white text-gray-900 shadow-sm border border-gray-100"
              }`}
            >
              <div className="flex flex-col gap-3">
                <div className="w-full h-48 bg-white rounded-lg flex items-center justify-center p-4 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <h1 className="text-xl font-bold truncate" title={item.name}>
                    {item.name}
                  </h1>
                  <p className="text-lg opacity-60 font-bold">
                    ₹{item.price.toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-4">
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
                      // Ensure image is passed if not already in item (though it should be)
                      setCart((prev) => [...prev, { ...item, quantity: 1 }]);
                    }

                    // Remove from wishlist
                    setWishlist((prev) =>
                      prev.filter(
                        (wishlistItem) => wishlistItem.name !== item.name,
                      ),
                    );
                  }}
                  className={`w-full py-2 rounded-lg font-bold text-sm transition-all active:scale-95 ${
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
                  className="w-full py-2 rounded-lg font-medium text-white bg-red-500 hover:bg-red-600 transition-colors active:scale-95 text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 opacity-50 gap-4">
          {/* <span className="text-6xl">✨</span> */}
          <h2 className="text-2xl font-medium">Your wishlist is empty</h2>
        </div>
      )}
    </div>
  );
};

export default WishlistList;
