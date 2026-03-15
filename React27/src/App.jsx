import ProductListContainer from "./components/ProductListContainer";
const App = () => {
  return (
    <div className="min-h-screen bg-gray-400 text-gray-200 selection:bg-gray-700 font-sans">
      <main className="px-4 pb-12">
        <ProductListContainer />
      </main>
    </div>
  );
};

export default App;
