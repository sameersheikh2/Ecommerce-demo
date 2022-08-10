import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from "./store/Store";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import ProductDetail from "./components/products/ProductDetail";
import Products from "./pages/Products";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import Error from "./components/Error";

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </Provider>
  );
};

export default App;
