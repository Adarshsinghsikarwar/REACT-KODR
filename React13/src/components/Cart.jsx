import React from "react";
import Card from "./Card";

const Cart = ({ cart, setCart }) => {
  const handleRemoveFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  return (
    <div className="w-full min-h-screen bg-white p-5">
      <h1 className="text-3xl font-bold mb-5">
        Shopping Cart ({cart.length} items)
      </h1>
      {cart.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-2xl text-gray-500">Your cart is empty</p>
          <p className="text-gray-400 mt-2">
            Add some products to get started!
          </p>
        </div>
      ) : (
        <div className="flex flex-wrap gap-5">
          {cart.map((product, index) => (
            <Card
              key={`${product.id}-${index}`}
              product={product}
              variant="cart"
              onRemove={handleRemoveFromCart}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
