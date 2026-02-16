import Card from "./Card";
const Home = ({ products, setFavorite, setCart }) => {
  return (
    <div className="w-full h-full bg-white p-5 flex flex-wrap gap-5">
      {products.map((product) => (
        <Card
          key={product.id}
          product={product}
          variant="home"
          setFavorite={setFavorite}
          setCart={setCart}
        />
      ))}
    </div>
  );
};

export default Home;
