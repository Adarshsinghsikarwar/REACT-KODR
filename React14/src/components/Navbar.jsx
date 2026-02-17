import React, { useContext } from "react";
import { Context } from "../utils/Context";

const Navbar = ({}) => {
  const { setToggle } = useContext(Context);
  return (
    <div className="px-10 py-3 flex justify-between items-center">
      <div className="w-24 flex items-center gap-2">
        <img
          className="w-full h-full rounded-full object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxZ8BC6lUlVe-L-UykxoksDxYFbWHmmPdh4A&s"
          alt=""
        />
        <h1 className="text-2xl text-center font-medium">Adarsh Singh</h1>
      </div>
      <div className="cursor-pointer flex items-center gap-6">
        <h1
          onClick={() =>
            setToggle({ Home: true, Cart: false, Favorite: false })
          }
          className="text-xl font-medium"
        >
          Home
        </h1>
        <h1
          onClick={() =>
            setToggle({ Cart: true, Home: false, Favorite: false })
          }
          className="text-xl font-medium"
        >
          Cart
        </h1>
        <h1
          onClick={() =>
            setToggle({ Favorite: true, Home: false, Cart: false })
          }
          className="text-xl font-medium"
        >
          Favorites
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
