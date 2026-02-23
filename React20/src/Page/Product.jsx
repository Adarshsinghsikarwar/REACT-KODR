import ProductCard from "../components/ProductCard";
import PRODUCTS from "../data/products";

const Product = () => {
  return (
    <div className="mt-3 flex justify-center  gap-10">
      {PRODUCTS.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Product;
