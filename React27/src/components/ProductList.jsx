// src/components/dumb/ProductList.jsx
import ProductItem from "./ProductItem";

const ProductList = ({ products, onDelete }) => {
  if (!products.length) {
    return (
      <div className="max-w-2xl mx-auto mt-16 p-10 bg-black border border-gray-800 rounded-none shadow-2xl text-center">
        <h2 className="text-2xl font-bold text-white mb-3 tracking-widest uppercase">
          No Products Found
        </h2>
        <p className="text-gray-500">
          Our catalog is currently empty. Please check back later.
        </p>
      </div>
    );
  }

  return (
    <div className="product-list max-w-6xl mx-auto w-full">
      <div className="flex items-center justify-between mb-10 pb-4 border-b border-gray-800">
        <h2 className="text-3xl font-bold text-white tracking-widest uppercase">
          Collection
        </h2>
      </div>
      <div className="products-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
