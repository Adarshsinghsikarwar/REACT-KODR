import { useContext } from "react";
import { TaskContent } from "../Context";

const Cart = () => {
  const { cart, setCart } = useContext(TaskContent);
  return (
    <div>
      <div className=" flex flex-col gap-10">
        <h1 className="text-2xl font-bold">Carts</h1>
        <div>
          {cart.map((ele, idx) => {
            return (
              <div
                key={idx}
                className="bg-white px-5 rounded-xl py-8 flex justify-between"
              >
                <div className="flex items-center justify-center gap-3">
                  <h1 className="text-2xl font-bold">{ele.name}</h1>
                  <span className="text-xl">-</span>
                  <p className="text-xl text-black/60 font-bold">
                    ₹{ele.price}
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => {
                      if (cart.length > 0) {
                        cart.pop();
                      }
                    }}
                    className="px-7 mr-4 font-bold rounded-xl py-2 bg-black text-white"
                  >
                    -
                  </button>
                  <span>{ele.quantity}</span>
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
                    className="px-7 mr-4 font-bold rounded-xl py-2 bg-[#F3F3F3]"
                  >
                    +
                  </button>
                  <button
                    onClick={() => {
                      setCart((prev) =>
                        prev.filter((item) => item.name !== ele.name),
                      );
                    }}
                    className="px-7 font-medium text-white rounded-xl py-2 bg-[#FF393A]"
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <h1 className="text-2xl font-bold">
          Total :{cart.reduce((acc, ele) => acc + ele.quantity * ele.price, 0)}{" "}
          <br />
          {20400 >
          cart.reduce((acc, ele) => acc + ele.quantity * ele.price, 0)
            ? ""
            : "🎉 You unlocked free shipping!"}
        </h1>
      </div>
    </div>
  );
};

export default Cart;
