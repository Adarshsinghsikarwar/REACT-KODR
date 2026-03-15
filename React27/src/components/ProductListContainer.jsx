// src/components/smart/ProductListContainer.jsx
import { useProducts } from "../hooks/useProduct";
import ProductList from "./productList";
import { useForm } from "react-hook-form";
const ProductListContainer = () => {
  const { products, isFetching, fetchError, deleteProduct } = useProducts();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  if (isFetching)
    return (
      <div className="flex flex-col justify-center items-center h-64 gap-4">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-800 border-t-white shadow-[0_0_15px_rgba(255,255,255,0.1)]"></div>
        <span className="text-gray-300 font-medium tracking-widest uppercase text-sm animate-pulse">
          Loading...
        </span>
      </div>
    );
  if (fetchError)
    return (
      <div className="bg-gray-900 border border-gray-700 shadow-lg text-white px-6 py-4 rounded-none max-w-lg mx-auto mt-12 text-center flex flex-col items-center gap-2">
        <span className="text-2xl">⚠</span>
        <p className="font-semibold">Oops! Something went wrong.</p>
        <p className="text-sm opacity-80">{fetchError}</p>
      </div>
    );

  return (
    <>
      <form
        onSubmit={handleSubmit(() => {})}
        className="max-w-2xl mx-auto mb-12 p-6 bg-black border border-gray-800 rounded-none shadow-lg flex flex-col gap-4"
      >
        <input
          {...register("name", { required: "Product name is required" })}
          type="text"
          placeholder="Product Name"
        />
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name.message}</span>
        )}
        <input
          {...register("description", {
            required: "Product description is required",
          })}
          type="text"
          placeholder="Product Description"
        />
        {errors.description && (
          <span className="text-red-500 text-sm">
            {errors.description.message}
          </span>
        )}
        <input
          {...register("price", { required: "Product price is required" })}
          type="text"
          placeholder="Product Price"
        />
        {errors.price && (
          <span className="text-red-500 text-sm">{errors.price.message}</span>
        )}
        <input
          {...register("image", { required: "Product image URL is required" })}
          type="text"
          placeholder="Product Image URL"
        />
        {errors.image && (
          <span className="text-red-500 text-sm">{errors.image.message}</span>
        )}
        <button type="submit">Add Product</button>
      </form>
      <ProductList products={products} onDelete={deleteProduct} />
    </>
  );
};

export default ProductListContainer;
