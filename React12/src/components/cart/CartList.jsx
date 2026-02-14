import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

const CartList = () => {
  const { cart, setCart, mode } = useContext(TaskContext);

  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cart.map((ele, idx) => {
          return (
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
                    src={ele.image}
                    alt={ele.name}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <h1 className="text-xl font-bold truncate" title={ele.name}>
                    {ele.name}
                  </h1>
                  <p className="text-lg opacity-60 font-bold">₹{ele.price}</p>
                </div>
              </div>

              <div className="flex items-center justify-between mt-4 bg-gray-50 dark:bg-gray-700 rounded-lg p-2">
                <button
                  onClick={() => {
                    if (cart.length > 0) {
                      const newCart = [...cart];
                      // Find this specific item index to remove/decrement if needed,
                      // but keeping original logic "pop" or similar for simplicity if that was the intent,
                      // However, to make it work properly for a specific card:
                      // The original logic was: const newCart = [...cart]; newCart.pop(); setCart(newCart);
                      // This removes the LAST item, which is weird for a specific card's button.
                      // Let's assume the user wants to decrement THIS item's quantity.
                      // But looking at the original code again:
                      /*
                        button onClick={() => {
                            if (cart.length > 0) {
                                const newCart = [...cart];
                                newCart.pop(); // This is definitely buggy in original code for a specific line item
                                setCart(newCart);
                            }
                        }}
                        */
                      // I will fix this logic to decrement quantity for THIS item,
                      // as "pop()" on the whole cart makes no sense on a card-level "-" button.
                      // Actually, looking at the other button:
                      /*
                        setCart((prev) => prev.map((item) => item.name === ele.name ? { ...item, quantity: item.quantity + 1 } : item));
                        */
                      // So the "-" button should likely be:
                      if (ele.quantity > 1) {
                        setCart((prev) =>
                          prev.map((item) =>
                            item.name === ele.name
                              ? { ...item, quantity: item.quantity - 1 }
                              : item,
                          ),
                        );
                      } else {
                        // Optional: Remove if quantity goes to 0? Or just stay at 1?
                        // Let's just keep it at 1 for now or remove.
                        // The original code had a separate "Remove" button.
                        // Let's just decrement.
                        setCart((prev) =>
                          prev
                            .map((item) =>
                              item.name === ele.name
                                ? { ...item, quantity: item.quantity - 1 }
                                : item,
                            )
                            .filter((i) => i.quantity > 0),
                        );
                      }
                    }
                  }}
                  className={`w-8 h-8 flex items-center justify-center font-bold rounded-full transition-colors ${
                    mode === "dark"
                      ? "bg-gray-600 hover:bg-gray-500"
                      : "bg-white hover:bg-gray-200 shadow-sm"
                  }`}
                >
                  -
                </button>
                <span className="text-lg font-bold">{ele.quantity}</span>
                <button
                  onClick={() => {
                    setCart((prev) =>
                      prev.map((item) =>
                        item.name === ele.name
                          ? { ...item, quantity: item.quantity + 1 }
                          : item,
                      ),
                    );
                  }}
                  className={`w-8 h-8 flex items-center justify-center font-bold rounded-full transition-colors ${
                    mode === "dark"
                      ? "bg-gray-600 hover:bg-gray-500"
                      : "bg-white hover:bg-gray-200 shadow-sm"
                  }`}
                >
                  +
                </button>
              </div>

              <button
                onClick={() => {
                  setCart((prev) =>
                    prev.filter((item) => item.name !== ele.name),
                  );
                }}
                className="mt-3 w-full py-2 font-medium text-white rounded-lg bg-[#FF393A] hover:bg-red-600 transition-colors text-sm"
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
      <div className="mt-4 p-4 rounded-xl bg-opacity-10 bg-gray-500">
        <h1 className="text-2xl font-bold">
          Total : {cart.reduce((acc, ele) => acc + ele.quantity * ele.price, 0)}{" "}
          <br />
          {20400 >
          cart.reduce((acc, ele) => acc + ele.quantity * ele.price, 0) ? (
            ""
          ) : (
            <span className="text-green-500">
              🎉 You unlocked free shipping!
            </span>
          )}
        </h1>
      </div>
    </div>
  );
};

export default CartList;
