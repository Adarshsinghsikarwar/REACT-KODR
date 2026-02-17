import React, { useContext } from "react";
import { Context } from "../utils/Context";
import Card from "./Card";

const Cart = () => {
  const { cart } = useContext(Context);
  return (
    <div className="flex flex-wrap gap-4 justify-between px-10 py-5">
      {cart.map((product) => (
        <Card cart={cart} variant="cart" key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Cart;
