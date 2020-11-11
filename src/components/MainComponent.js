import React, { useState } from 'react';
import Menu from './MenuComponent';
import DishDetailComponent from './DishDetailComponent';
import { DISHES } from '../shared/dishes';
import Header from './Header';
import Footer from './Footer';

const Main = () => {
  const [dishes, _] = useState(DISHES);
  const [selectedDish, setSelectedDish] = useState(0);

  const onDishSelect = (dishId) => {
    setSelectedDish(dishId);
  };

  return (
    <>
      <Header />
      <Menu dishes={dishes} onClick={(dishId) => onDishSelect(dishId)} />
      <DishDetailComponent
        dish={dishes.filter((dish) => dish.id === selectedDish)[0]}
      />
      <Footer />
    </>
  );
};

export default Main;
