import React from "react";
import Product from "./views/ProductSingleView";
import Home from "./views/Home";
import ProductList from "./views/ProductsList";
import Register from "./views/Register";
import Login from "./views/Login";
import Cart from "./views/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products/:category" element={<ProductList />} />

        <Route path="/product/:id" element={<Product />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
