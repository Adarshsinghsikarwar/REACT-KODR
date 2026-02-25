import { NavLink } from "react-router-dom";

const NAVCONFIG = [
  { id: 1, label: "Home", path: "/" },
  { id: 2, label: "Cart", path: "/cart" },
  { id: 3, label: "WishList", path: "/wishlist" },
  { id: 4, label: "SignIn", path: "/signin" },
  { id: 5, label: "SignUp", path: "/signup" },
];

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md px-8 py-4 flex items-center justify-between">
      <span className="text-2xl font-bold text-indigo-600 tracking-tight">
        ShopKart
      </span>

      <ul className="flex items-center gap-6">
        {NAVCONFIG.map((item) => (
          <li key={item.id}>
            <NavLink
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `text-sm font-medium transition-all duration-200 pb-0.5 border-b-2 ${
                  isActive
                    ? "text-indigo-600 border-indigo-600"
                    : "text-gray-600 border-transparent hover:text-indigo-500 hover:border-indigo-400"
                }`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
