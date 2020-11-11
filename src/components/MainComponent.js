import React, { useState } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetailComponent from './DishDetailComponent';
import { DISHES } from '../shared/dishes';
import Header from './Header';
import Footer from './Footer';
import { Routes, Route, Navigate } from 'react-router-dom';

const Main = () => {
  const [dishes, _] = useState(DISHES);
  const [selectedDish, setSelectedDish] = useState(0);

  const onDishSelect = (dishId) => {
    setSelectedDish(dishId);
  };
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route
          path="/menu"
          element={
            <Menu dishes={dishes} onClick={(dishId) => onDishSelect(dishId)} />
          }
        />
        <Navigate to="/home" />
      </Routes>
      <Footer />
    </>
  );
};

export default Main;
