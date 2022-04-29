import React from "react";
import { useSelector } from "react-redux";
import Product from "./views/ProductSingleView";
import Home from "./views/Home";
import ProductList from "./views/ProductsList";
import Register from "./views/Register";
import Login from "./views/Login";
import Cart from "./views/Cart";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>
      
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products/:category" element={<ProductList />} />

        <Route path="/product/:id" element={<Product />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />

        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
      </Routes>
    </Router>
  );
};

export default App;
