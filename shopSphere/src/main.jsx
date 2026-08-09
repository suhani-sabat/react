import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import Layout from "./Layout";

import Home from "./Pages/Home/Home";
import Products from "./Pages/Products";
import Categories from "./Pages/Categories";
import Deals from "./Pages/Deals";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
// import ProductDetails from "./Pages/ProductDetails";
// import NotFound from "./Pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />

      <Route path="products" element={<Products />} />
      {/* <Route path="products/:id" element={<ProductDetails />} /> */}

      <Route path="categories" element={<Categories />} />
      <Route path="deals" element={<Deals />} />

      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="cart" element={<Cart />} />

      {/* <Route path="*" element={<NotFound />} /> */}
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);