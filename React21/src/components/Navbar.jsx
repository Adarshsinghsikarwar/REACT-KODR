import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="mt-1">
      <ul className="flex justify-center gap-10 py-5 bg-gray-300 text-2xl rounded mb-5" >
        <li className="hover:border-b-2 transition-all">
          <NavLink  to="/">Home</NavLink>
        </li>
        <li className="hover:border-b-2 transition-all">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="hover:border-b-2 transition-all">
          
          <NavLink to="/service">Service</NavLink>
        </li>
        <li className="hover:border-b-2 transition-all">
          <NavLink to="/product">Product</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
