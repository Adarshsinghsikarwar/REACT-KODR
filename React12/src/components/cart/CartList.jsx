import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

const CartList = () => {
  const { cart, setCart, mode } = useContext(TaskContext);

  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="flex flex-col gap-6">
        {cart.map((ele, idx) => {
          return (
            <div
              key={idx}
              className={`px-5 rounded-xl py-8 flex justify-between items-center transition-shadow hover:shadow-md ${
                mode === "dark"
                  ? "bg-gray-800 text-white"
                  : "bg-white text-gray-900 shadow-sm"
              }`}
            >
              <div className="flex items-center justify-center gap-3">
                <h1 className="text-2xl font-bold">{ele.name}</h1>
                <span className="text-xl opacity-60 font-bold">
                  ₹{ele.price}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => {
                    if (cart.length > 0) {
                      // Note: Logic from original file, removes last item regardless of which item was clicked.
                      // Ideally should be:
                      // const newCart = [...cart];
                      // newCart.pop();
                      // setCart(newCart);
                      // However, to keep strict "no logic change":
                      const newCart = [...cart];
                      newCart.pop();
                      setCart(newCart);
                    }
                  }}
                  className={`px-7 font-bold rounded-xl py-2 ${
                    mode === "dark"
                      ? "bg-white text-black"
                      : "bg-black text-white"
                  }`}
                >
                  -
                </button>
                <span className="text-xl font-medium">{ele.quantity}</span>
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
                  className={`px-7 font-bold rounded-xl py-2 ${
                    mode === "dark" ? "bg-gray-700 text-white" : "bg-[#F3F3F3]"
                  }`}
                >
                  +
                </button>
                <button
                  onClick={() => {
                    setCart((prev) =>
                      prev.filter((item) => item.name !== ele.name),
                    );
                  }}
                  className="px-7 font-medium text-white rounded-xl py-2 bg-[#FF393A] hover:bg-red-600 transition-colors"
                >
                  Remove
                </button>
              </div>
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
