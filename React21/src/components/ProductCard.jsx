import { Link, Outlet } from "react-router-dom";
const ProductCard = ({ product }) => {
  return (
    <div className=" w-[20vw] bg-zinc-200 rounded p-5">
      <div className="h-[15vh] w-full ">
        <img
          className="w-full h-full object-contain"
          src={product.image}
          alt=""
        />
      </div>
      <div className="my-2">
        <h1>
          {product.name.length > 10
            ? product.name.substring(0, 10) + "..."
            : product.name}
        </h1>
        <h1>
          {product.description.length > 10
            ? product.description.substring(0, 10) + "..."
            : product.description}
        </h1>
      </div>
      <Link
        className="text-2xl px-5 py-1 bg-blue-300 rounded"
        to={`/product/${product.id}`}
      >
        {" "}
        View
      </Link>
    </div>
  );
};

export default ProductCard;
