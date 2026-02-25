const ProductCard = () => {
  return (
    <div className="w-100 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
      <div className="h-52 w-full bg-zinc-50 flex items-center justify-center p-1 rounded-lg">
        <img
          className="h-full bg-red-100 w-full object-contain transition-transform duration-300 hover:scale-105"
          src=""
          alt="Product"
        />
      </div>

      <div className="p-4 flex flex-col gap-2 flex-1">
        <h2 className="text-base font-semibold text-gray-800 leading-tight line-clamp-2">
          Product Name
        </h2>
        <p className="text-sm text-gray-500 line-clamp-2">
          Product Description goes here briefly.
        </p>
        <span className="text-lg font-bold text-indigo-600 mt-1">$49.99</span>
      </div>

      <div className="px-4 pb-4 flex gap-2">
        <button className="flex-1 bg-zinc-600 hover:bg-zinc-700 text-white text-sm font-medium py-2 rounded-lg transition-colors duration-200">
          Add to Cart
        </button>
        <button className="flex-1 border border-zinc-600 text-zinc-600 hover:bg-zinc-50 text-sm font-medium py-2 rounded-lg transition-colors duration-200">
          Wishlist
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
