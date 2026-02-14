import { createContext, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [state, setState] = useState([
    { name: "Keyboard", price: 1200 },
    { Mouse: 800, price: 800 },
    { name: "moniter", price: 2000 },
    { Headphone: 1500, price: 3000 },
  ]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]); // Renamed to lowercase 'wishlist' for consistency if possible, but user had 'Wishlist'. Let's stick to 'Wishlist' to minimize logic changes as requested.
  const [mode, setMode] = useState("light");

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
