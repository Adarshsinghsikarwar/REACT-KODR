import React from "react";

const Navbar = ({ toggle, setToggle, products, cart, favorite }) => {
  const handleNavigation = (page) => {
    setToggle({
      home: page === "home",
      cart: page === "cart",
      favorite: page === "favorite",
    });
  };

  return (
    <div className="flex justify-between p-5 bg-white shadow-sm">
      <div className="w-24 flex items-center gap-2">
        <img
          className="w-full h-full rounded-full object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxZ8BC6lUlVe-L-UykxoksDxYFbWHmmPdh4A&s"
          alt=""
        />
        <h1 className="text-2xl text-center font-medium">Adarsh Singh</h1>
      </div>
      <div className="flex items-center gap-6">
        <h1
          onClick={() => handleNavigation("home")}
          className={`text-xl font-bold px-5 py-2 border-b-2 cursor-pointer transition-colors ${
            toggle.home
              ? "border-black text-black"
              : "border-transparent text-gray-400 hover:text-gray-600"
          }`}
        >
          Home <sup className="px-2 py-1 bg-black text-white rounded-full">{products.length}</sup>
        </h1>
        <h1
          onClick={() => handleNavigation("cart")}
          className={`text-xl font-bold px-5 py-2 border-b-2 cursor-pointer transition-colors ${
            toggle.cart
              ? "border-black text-black"
              : "border-transparent text-gray-400 hover:text-gray-600"
          }`}
        >
          Cart <sup className="px-2 py-1 bg-black text-white rounded-full">{cart.length}</sup>
        </h1>
        <h1
          onClick={() => handleNavigation("favorite")}
          className={`text-xl font-bold px-5 py-2 border-b-2 cursor-pointer transition-colors ${
            toggle.favorite
              ? "border-black text-black"
              : "border-transparent text-gray-400 hover:text-gray-600"
          }`}
        >
          Favorite <sup className="px-2 py-1 bg-black text-white rounded-full">{favorite.length}</sup>
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
