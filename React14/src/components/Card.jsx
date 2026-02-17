import { useContext } from "react";
import { Context } from "../utils/Context";
const Card = ({
  product,
  variant,
  cart,
  handleCartAdd,
  handleCartRemove,
  handleFavoriteAdd,
}) => {
  const { favorite } = useContext(Context);
  // Find if this product is already in the cart
  const cartItem = cart?.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  // Find if this product is in favorites
  const isFavorite = !!favorite?.find((item) => item.id === product.id);

  return (
    <div className="w-[400px] h-[400px] p-4 flex flex-col justify-between bg-gray-100 rounded-lg shadow-md">
      <div className="w-full h-[50%] flex items-center justify-center bg-white rounded-md">
        {quantity > 0 && variant === "cart" && (
          <h1 className="text-3xl absolute top-32 left-16 bg-black text-white px-3 rounded">
            qty: {quantity}
          </h1>
        )}
        <img
          className="w-full h-full object-contain p-2"
          src={product.image}
          alt={product.title}
        />
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-lg line-clamp-2">
          {product.title.length > 20
            ? product.title.substring(0, 20) + "..."
            : product.title}
        </h1>
        <p className="text-sm text-gray-700">
          {product.description.length > 50
            ? product.description.substring(0, 50) + "..."
            : product.description}
        </p>

        <p className="text-xl font-bold text-zinc-600">${product.price}</p>
      </div>
      <>
        {variant === "home" && (
          <div className="flex justify-between gap-3">
            <div>
              {quantity > 0 ? (
                <>
                  <span
                    className="cursor-pointer px-4 py-1 bg-blue-300 rounded "
                    onClick={() => handleCartAdd(product)}
                  >
                    +
                  </span>
                  <span className="cursor-pointer px-4 py-1">{quantity}</span>
                  <span
                    className="cursor-pointer px-4 py-1 bg-blue-300 rounded"
                    onClick={() => handleCartRemove(product)}
                  >
                    -
                  </span>
                </>
              ) : (
                <button
                  onClick={() => handleCartAdd(product)}
                  className="px-4 py-2 bg-green-100 rounded hover:bg-green-200 transition-colors"
                >
                  Add to Cart
                </button>
              )}
            </div>
            <button
              disabled={isFavorite}
              onClick={() => handleFavoriteAdd(product)}
              className={`px-4 py-2 rounded transition-colors ${
                isFavorite
                  ? "bg-red-300 cursor-not-allowed opacity-50"
                  : "bg-green-100 hover:bg-green-200"
              }`}
            >
              {isFavorite ? "Added to Favorites" : "Favorite"}
            </button>
          </div>
        )}
        {variant == "cart" && (
          <div className="flex justify-between gap-3">
            <button
              onClick={() => {
                "";
              }}
              className="px-4 py-2 bg-green-100 rounded hover:bg-green-200 transition-colors"
            >
              Remove From Cart
            </button>
            <button className="px-4 py-2 bg-green-100 rounded hover:bg-green-200 transition-colors">
              Move to Favorite
            </button>
          </div>
        )}
        {variant == "favorite" && (
          <div className="flex justify-between gap-3">
            <button
              onClick={() => {
                "";
              }}
              className="px-4 py-2 bg-green-100 rounded hover:bg-green-200 transition-colors"
            >
              Remove from Favorite
            </button>
            <button className="px-4 py-2 bg-green-100 rounded hover:bg-green-200 transition-colors">
              Move to Cart
            </button>
          </div>
        )}
      </>
    </div>
  );
};

export default Card;
