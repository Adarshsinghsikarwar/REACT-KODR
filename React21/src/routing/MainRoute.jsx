import { Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import About from "../page/About";
import Service from "../page/Service";
import Product from "../page/Product";
import ShowCard from "../components/ShowCard";
const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/product" element={<Product />}>
          <Route path="/product/:id" element={<ShowCard />} />
        </Route>
      </Routes>
    </div>
  );
};

export default MainRoute;
