import React, { useContext } from "react";
import { Context } from "../utils/Context";
import Card from "./Card";

const Favorite = () => {
  const { favorite, cart } = useContext(Context);
  return (
    <div className="flex flex-wrap gap-4 justify-between px-10 py-5">
      {favorite.map((product) => (
        <Card
          cart={cart} 
          variant="favorite"
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default Favorite;
