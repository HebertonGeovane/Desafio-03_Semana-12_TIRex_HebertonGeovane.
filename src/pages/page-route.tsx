import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/home";
import ShopPage from "../pages/shop/shop";
import AboutPage from "../pages/about/about";
import CartPage from "../pages/cart/cart";
import CheckoutPage from "../pages/checkout/checkout";
import ContactPage from "../pages/contact/contact";
import LoginPage from "../pages/login/login"


const PageRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/about/" element={<AboutPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default PageRoute;
