import { useParams } from "react-router-dom";
import PRODUCTS from "../data/products";
import { useNavigate } from "react-router-dom";

const ShowCard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find((p) => p.id === Number(id));

  if (!product)
    return <p className="text-center mt-10 text-xl">Product not found!</p>;

  return (
    <div className="mt-5 w-[20vw] bg-zinc-100 rounded p-3">
      <div className="h-[15vh] w-full rounded">
        <img className="h-full w-full object-contain" src={product.image} alt={product.name} />
      </div>
      <div className="mt-3">
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
        <button onClick={() => navigate(-1)} className="mt-3 text-xl font-semibold cursor-pointer bg-green-500 px-5 py-1 rounded transition-all">Back</button>
      </div>
    </div>
  );
};

export default ShowCard;
