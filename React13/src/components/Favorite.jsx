import React from "react";
import Card from "./Card";

const Favorite = ({ favorite, setFavorite, setCart }) => {
  const handleRemoveFromFavorite = (productId) => {
    setFavorite((prev) => prev.filter((item) => item.id !== productId));
  };

  return (
    <div className="w-full min-h-screen bg-white p-5">
      <h1 className="text-3xl font-bold mb-5">
        Favorites ({favorite.length} items)
      </h1>
      {favorite.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-2xl text-gray-500">No favorites yet</p>
          <p className="text-gray-400 mt-2">
            Start adding your favorite products!
          </p>
        </div>
      ) : (
        <div className="flex flex-wrap gap-5">
          {favorite.map((product, index) => (
            <Card
              key={`${product.id}-${index}`}
              product={product}
              variant="favorite"
              setCart={setCart}
              onRemove={handleRemoveFromFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorite;
