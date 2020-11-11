import React, { useState } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetailComponent from './DishDetailComponent';
import { DISHES } from '../shared/dishes';
import Header from './Header';
import Footer from './Footer';
import { Routes, Route, Navigate } from 'react-router-dom';
import Contact from './Contact';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaderes';
import { PROMOTIONS } from '../shared/promotions';

const Main = () => {
  const [dishes, _] = useState(DISHES);
  const [comments, setComments] = useState(COMMENTS);
  const [promotions, setPromotions] = useState(PROMOTIONS);
  const [leaders, setLeaders] = useState(LEADERS);

  const [selectedDish, setSelectedDish] = useState(0);

  const onDishSelect = (dishId) => {
    setSelectedDish(dishId);
  };
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/home"
          element={
            <Home
              dish={dishes.filter((dish) => dish.featured)[0]}
              leader={leaders.filter((leader) => leader.featured)[0]}
              promotion={promotions.filter((promo) => promo.featured)[0]}
            />
          }
        />
        <Route
          path="/menu"
          element={
            <Menu dishes={dishes} onClick={(dishId) => onDishSelect(dishId)} />
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Navigate to="/home" />
      </Routes>
      <Footer />
    </>
  );
};

export default Main;
