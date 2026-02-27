import ProductItem from "./ProductItem";

const ProductList = ({ products, onDelete }) => {
  // console.log("Rendering ProductList");
  // console.log(products)
  return (
    <div className="grid grid-cols-4 gap-4 mt-10">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default ProductList;
