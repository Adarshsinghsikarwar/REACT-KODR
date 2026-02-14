import Header from "./components/Header";
import Product from "./components/Product";
import Cart from "./components/Cart"
import Wishlist from "./components/Wishlist";
const App = () => {
  return (
    <div className="w-full bg-[#F4F7FB] px-20 py-10 flex flex-col gap-13">
      <Header />
      <Product />
      <Cart />
      <Wishlist/>
    </div>
  );
};

export default App;
