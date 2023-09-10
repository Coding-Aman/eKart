import { useState, useCallback, useEffect } from "react";
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";

import Home from "./shop/pages/Home";
import Cart from "./shop/pages/Cart";
import ProductsList from "./shop/pages/ProductsList";
import ProductDetail from "./shop/pages/ProductDetail";

import Login from "./Auth/pages/Login";
import Signup from "./Auth/pages/Signup";
import ResetPassword from "./Auth/pages/ResetPassword";
import SetPassword from "./Auth/pages/SetPassword";

import Products from "./admin/pages/Products";
import EditProduct from "./admin/pages/EditProduct";

import Error404 from "./Error404";
import AuthContext from "./context/auth-context";

export default function App() {
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = useCallback((token) => {
    localStorage.setItem("token", token);
    setToken(token);
    setIsLoggedIn(true);
  }, []);

  const logoutHandler = useCallback(() => {
    localStorage.removeItem("token");
    setToken("");
    setIsLoggedIn(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token,
        isLoggedIn,
        loginHandler,
        logoutHandler,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/product/:productID" element={<ProductDetail />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reset" element={<ResetPassword />} />
          <Route path="/set-password" element={<SetPassword />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/admin/addProduct" element={<EditProduct />} />
          <Route path="/admin/products" element={<Products />} />

          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
