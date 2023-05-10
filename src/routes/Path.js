import { createBrowserRouter } from "react-router-dom";
import Calculator from "../pages/calculator";
import Gallery from "../pages/gallery";
import Home from "../pages/home";
import Product from "../pages/product";
import ProductDetail from "../pages/product_detail";
import ShoppingCart from "../pages/shopping_cart";
import Root from "./root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/calculator",
        element: <Calculator />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/products",
        element: <Product />,
      },
      {
        path: "/product-detail",
        element: <ProductDetail />,
      },
      {
        path: "/cart",
        element: <ShoppingCart />,
      },
    ],
  },
]);
