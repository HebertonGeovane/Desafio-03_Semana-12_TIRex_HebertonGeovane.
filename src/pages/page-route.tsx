import React from 'react';
import { Route, Routes, } from 'react-router-dom';
import   HomePage from '../pages/home/home'; 

const PageRoute = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage />}  /> 
      </Routes>
  );
};

export default PageRoute;
