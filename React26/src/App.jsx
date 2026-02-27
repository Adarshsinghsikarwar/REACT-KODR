import React, { useState, useMemo, useCallback } from "react";
// Import our child components
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import Summary from "./components/Summary";

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      price: 100,
    },
    {
      id: 2,
      name: "Product 2",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      price: 200,
    },
    {
      id: 3,
      name: "Product 3",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      price: 300,
    },
    {
      id: 4,
      name: "Product 4",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      price: 400,
    },
  ]);

  const [search, setSearch] = useState("");

  const [counter, setCounter] = useState(0);

  const filterSearch = useMemo(() => {
    console.log("filterSearch");
    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [products, search]);

  

  const deleteProduct = useCallback((id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  }, []);

  return (
    <div className="px-10 py-5 font-sans">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-3xl font-bold">Optimization Store</h1>

        <button
          onClick={() => setCounter(counter + 1)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Unrelated Counter: {counter}
        </button>
      </div>

      <SearchBar search={search} setSearch={setSearch} />

      <Summary />

      <ProductList products={filterSearch} onDelete={deleteProduct} />
    </div>
  );
};

export default App;
