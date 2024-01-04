import Products from "../components/Products";
import Navbar from "../components/Navbar";
import ProductDetail from "../components/ProductDetail";

export const RouteList = [
  {
    path: "/Navbar/",
    element: <Navbar />,
  },
  {
    path: "/product/*",
    element: <Products />,
  },
  {
    path: "/productDetail/:id",
    element: <ProductDetail />,
  },
];
