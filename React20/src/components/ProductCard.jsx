import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
    console.log(product)
  return (
    <div className="w-[20vw] bg-zinc-100 rounded p-3">
      <div className="h-[15vh] w-full rounded">
        <img className="h-full w-full object-contain" src={product.image} alt="" />
      </div>
      <div className="my-5 ">
        <h1 className="text-xl">
          {product.name?.length > 14
            ? product.name.slice(0, 14) + "..."
            : product.name}
        </h1>
        <p className="text-xl">
          {product.description?.length > 20
            ? product.description.slice(0, 20) + "..."
            : product.description}
        </p>
      </div>
      <Link className="text-xl font-semibold cursor-pointer bg-blue-300 px-5 py-1 rounded transition-all" product={product} to={`/product/${product.id}`}>View</Link>
    </div>
  );
};

export default ProductCard;
