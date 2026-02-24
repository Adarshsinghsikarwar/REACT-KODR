import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import PRODUCTS from "../utils/data";

const ShowCard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.filter((product) => product.id == id);
  console.log(product);

  return (
    <div className=" w-[20vw] bg-zinc-200 rounded p-5">
      <div className="h-[15vh] w-full ">
        <img
          className="w-full h-full object-contain"
          src={product[0].image}
          alt=""
        />
      </div>
      <div className="my-2">
        <h1>
          {product[0].name.length > 10
            ? product[0].name.substring(0, 10) + "..."
            : product[0].name}
        </h1>
        <h1>
          {product[0].description.length > 10
            ? product[0].description.substring(0, 10) + "..."
            : product[0].description}
        </h1>
      </div>

      <button
        className="text-2xl px-5 py-1 bg-green-400 cursor-pointer rounded"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
    </div>
  );
};

export default ShowCard;
