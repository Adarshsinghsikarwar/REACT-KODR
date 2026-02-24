import ProductCard from "../components/ProductCard";
import PRODUCTS from "../utils/data";
import { Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div className="">
      <div className="flex justify-center gap-15">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <hr className="my-5" />
      <Outlet />
    </div>
  );
};

export default Product;
