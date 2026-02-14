import { createContext, useState } from "react";

export const TaskContent = createContext();

export const Context = ({ children }) => {
  const [state, setState] = useState([
    { name: "Keyboard", price: 1200 },
    { Mouse: 800, price: 800 },
    { name: "moniter", price: 2000 },
    { Headphone: 1500, price: 3000 },
  ]);
  const [cart, setCart] = useState([]);
  const [Wishlist, setWishlist] = useState([]);
  const [mode, setMode] = useState("light");

  return (
    <TaskContent.Provider
      value={{
        state,
        setState,
        Wishlist,
        setWishlist,
        cart,
        setCart,
        mode,
        setMode,
      }}
    >
      {children}
    </TaskContent.Provider>
  );
};
