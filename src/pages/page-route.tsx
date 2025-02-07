import React from 'react';
import { Route, Routes, } from 'react-router-dom';
import   HomePage from '../pages/home/home'; 
import ShopPage from "../pages/shop/shop";

const PageRoute = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage />}  /> 
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
  );
};

export default PageRoute;
