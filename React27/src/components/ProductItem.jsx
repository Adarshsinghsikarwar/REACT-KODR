// src/components/dumb/ProductItem.jsx
import React from "react";

const ProductItem = ({ product, onDelete }) => {
  return (
    <div className="product-card group relative bg-black border border-gray-800 p-5 flex flex-col items-center overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.1)] hover:border-gray-600">
      
      <div className="relative w-full mb-6 flex justify-center">
        <div className="w-full aspect-square overflow-hidden bg-white group-hover:opacity-90 transition-opacity duration-300 border border-gray-800">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain p-4 mix-blend-multiply grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
          />
        </div>
      </div>

      <div className="flex flex-col items-center w-full flex-grow text-center">
        <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide truncate w-full px-2" title={product.name}>
          {product.name}
        </h3>
        <p className="price text-gray-300 font-mono text-xl mb-4">
          ${product.price}
        </p>
        <p className="description text-gray-500 text-sm mb-6 line-clamp-3 min-h-[60px] px-2 leading-relaxed font-light">
          {product.description}
        </p>
      </div>

      <div className="actions mt-auto w-full">
        <button
          onClick={() => onDelete(product.id)}
          className="w-full py-3 px-4 bg-transparent hover:bg-white text-gray-400 hover:text-black border border-gray-800 hover:border-white transition-all duration-300 font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          Remove
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
