import MainLayout from "./layout/MainLayout";
import Header from "./components/common/Header";
import ProductList from "./components/products/ProductList";
import CartList from "./components/cart/CartList";
import WishlistList from "./components/wishlist/WishlistList";

const App = () => {
  return (
    <MainLayout>
      <Header />
      <ProductList />
      <CartList />
      <WishlistList />
    </MainLayout>
  );
};

export default App;
