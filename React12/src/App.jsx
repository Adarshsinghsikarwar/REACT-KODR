import MainLayout from "./layout/MainLayout";
import Header from "./components/common/Header";
import ProductList from "./components/products/ProductList";
import CartList from "./components/cart/CartList";
import WishlistList from "./components/wishlist/WishlistList";

const App = () => {
  return (
    <div className="bg-zinc-200 py-10 px-10 flex flex-col gap-10">
      <Header />
      <ProductList />
      <CartList />
      <WishlistList />
    </div>
  );
};

export default App;
