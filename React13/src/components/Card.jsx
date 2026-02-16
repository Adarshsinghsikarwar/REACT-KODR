import React from "react";

const Card = ({
  product,
  variant = "home",
  setFavorite,
  setCart,
  onRemove,
}) => {
  const handleAddToCart = () => {
    setCart((prev) => [...prev, product]);
  };

  const handleAddToFavorite = () => {
    setFavorite((prev) => [...prev, product]);
  };

  const handleRemove = () => {
    onRemove(product.id);
  };

  return (
    <div className="min-h-[400px] w-[400px] bg-zinc-200 rounded-lg flex flex-col">
      <div className="h-[180px] w-full p-2">
        <img
          className="w-full h-full object-contain rounded-t-lg"
          src={product.image}
          alt=""
        />
      </div>
      <div className="p-3 flex flex-col gap-1 flex-grow">
        <h1 className="text-base font-semibold line-clamp-2">
          {product.title.length > 50
            ? product.title.slice(0, 50) + "..."
            : product.title}
        </h1>
        <p className="text-sm font-medium text-gray-600">
          {product.description.length > 60
            ? product.description.slice(0, 60) + "..."
            : product.description}
        </p>
        <p className="text-lg font-bold text-green-600 mt-1">
          ${product.price}
        </p>
      </div>

      {/* Conditional Button Rendering Based on Variant */}
      <div className="flex gap-2 p-3">
        {variant === "home" && (
          <>
            <button
              onClick={handleAddToCart}
              className="flex-1 px-3 py-2 bg-black rounded text-white text-sm hover:bg-gray-800 transition-colors"
            >
              Add to Cart
            </button>
            <button
              onClick={handleAddToFavorite}
              className="flex-1 px-3 py-2 bg-black rounded text-white text-sm hover:bg-gray-800 transition-colors"
            >
              Favorite
            </button>
          </>
        )}

        {variant === "cart" && (
          <button
            onClick={handleRemove}
            className="w-full px-3 py-2 bg-red-600 rounded text-white text-sm hover:bg-red-700 transition-colors"
          >
            Remove from Cart
          </button>
        )}

        {variant === "favorite" && (
          <>
            <button
              onClick={handleAddToCart}
              className="flex-1 px-3 py-2 bg-black rounded text-white text-sm hover:bg-gray-800 transition-colors"
            >
              Add to Cart
            </button>
            <button
              onClick={handleRemove}
              className="flex-1 px-3 py-2 bg-red-600 rounded text-white text-sm hover:bg-red-700 transition-colors"
            >
              Remove
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
