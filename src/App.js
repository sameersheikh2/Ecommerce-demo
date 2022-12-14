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
import Error from "./components/Error";
import ForgetPassword from "./pages/ForgetPassword";

const App = () => {
  return (
    <div className="h-[100%]">
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route
            path="/products/category/:filterValue"
            element={<Products />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/products" element={<Products />} />
          <Route path="/account/password/reset" element={<ForgetPassword />} />
        </Routes>
      </Provider>
    </div>
  );
};

export default App;
