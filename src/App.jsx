import "./App.css";
import { Routes, Route } from "react-router";
import Layout from "./Layout";
import Home from "./pages/Home/Home";
import Cart from "./pages/cart/Cart";
import Orders from "./pages/Orders";
import PlaceOrder from "./pages/PlaceOrder";
import Products from "./pages/Products/products";
import About from "./pages/About/About";

import Product from "./pages/Products/Product";

import { ToastContainer } from "react-toastify";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/sign-in" element={<Login />} />

        <Route path="/products" element={<Products />} />
      </Routes>
      <ToastContainer />
    </Layout>
  );
}

export default App;
