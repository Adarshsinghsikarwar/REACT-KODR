import { useContext } from "react";
import { Context } from "../utils/Context";
import Card from "./Card";

const Home = () => {
  const { products, favorite, cart, setCart, setFavorite } = useContext(Context);

  const handleCartAdd = (product) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        // Update quantity of existing item
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        // Add new item to cart
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const handleCartRemove = (product) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem && existingItem.quantity > 1) {
        // Decrement quantity
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        );
      } else {
        // Remove item from cart
        return prev.filter((item) => item.id !== product.id);
      }
    });
  };

  const handleFavoriteAdd = (product) => {
    setFavorite((prev) => {
      const isExist = prev.find((item) => item.id === product.id);
      if (isExist) {
        return prev.filter((item) => item.id !== product.id);
      }
      return [...prev, product];
    });
  };
  return (
    <div className="flex flex-wrap gap-4 justify-between px-10 py-5">
      {products.map((product) => (
        <Card
          handleFavoriteAdd={handleFavoriteAdd}
          cart={cart}
          handleCartAdd={handleCartAdd}
          handleCartRemove={handleCartRemove}
          variant="home"
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default Home;
