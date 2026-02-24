import { Link, useNavigate } from "react-router-dom";
const NAVCONFIG = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Service",
    path: "/service",
  },
  {
    label: "Product",
    path: "/product",
  },
];
const Navbar = () => {
  return (
    <nav className="">
      <ul className="flex justify-center gap-10 text-2xl font-semibold bg-gray-300 p-5 rounded">
        {NAVCONFIG.map((item) => (
          <li className="hover:border-b-3 hover:border-black transition-all">
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

//<li className="hover:border-b-3 hover:border-black transition-all">
//   <a href="" onClick={() => handleClick()}>Product</a>
// </li> it render the page but it is not a good practice

// const navigate = useNavigate();
// const handleClick = () => {
//     navigate("/product");
// };
