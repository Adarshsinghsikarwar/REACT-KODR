import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Page/Home.jsx";
import About from "./Page/About.jsx";
import Service from "./Page/Service.jsx";
import Product from "./Page/Product.jsx";
import PageNotFound from "./Page/PageNotFound.jsx";
import ShowCard from "./components/ShowCard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/product",
        element: <Product />,
        children: [
          {
            path: ":id",
            element: <ShowCard />,
          },
        ],
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
