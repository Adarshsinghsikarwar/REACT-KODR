import { memo } from "react";

const ProductItem = ({ product,onDelete }) => {
  console.log("Rendering ProductItem:", product.name);

  return (
    <div>
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <img
          className="w-full h-48 object-cover"
          src={product.image}
          alt={product.name}
        />
      </div>
      <div className="p-4 bg-white flex flex-col items-start">
        <p className="text-lg font-semibold">{product.name}</p>
        <p className="text-gray-600">${product.price}</p>

        <button
          onClick={() => {onDelete(product.id)}}
          className="mt-3 px-3 py-1 bg-red-500 text-white font-medium text-sm rounded hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default memo(ProductItem);
