import { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [state, setState] = useState([
    {
      id: 1,
      name: "Keyboard",
      price: 1200,
      image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_t.png",
    },
    {
      id: 2,
      name: "Mouse",
      price: 800,
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png",
    },
    {
      id: 3,
      name: "Monitor",
      price: 2000,
      image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_t.png",
    },
    {
      id: 4,
      name: "Headphone",
      price: 3000,
      image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_t.png",
    },
    {
      id: 5,
      name: "Men's Backpack",
      price: 109.95,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    },
    {
      id: 6,
      name: "Casual T-Shirt",
      price: 22.3,
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
    },
    {
      id: 7,
      name: "Cotton Jacket",
      price: 55.99,
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    },
    {
      id: 8,
      name: "Dragon Chain Bracelet",
      price: 695,
      image:
        "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
    },
    {
      id: 9,
      name: "Snowboard Jacket",
      price: 56.99,
      image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png",
    },
    {
      id: 10,
      name: "Leather Biker Jacket",
      price: 29.95,
      image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_t.png",
    },
  ]);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem("mode");
    return savedMode ? savedMode : "light";
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);

  return (
    <TaskContext.Provider
      value={{
        state,
        setState,
        Wishlist: wishlist,
        setWishlist,
        cart,
        setCart,
        mode,
        setMode,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
