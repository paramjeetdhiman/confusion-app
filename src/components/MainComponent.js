import React, { useState } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetailComponent from './DishDetailComponent';
import { DISHES } from '../shared/dishes';

const Main = () => {
  const [dishes, _] = useState(DISHES);
  const [selectedDish, setSelectedDish] = useState(0);

  const onDishSelect = (dishId) => {
    setSelectedDish(dishId);
  };

  console.log(selectedDish);
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristornate Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={dishes} onClick={(dishId) => onDishSelect(dishId)} />
      <DishDetailComponent
        dish={dishes.filter((dish) => dish.id === selectedDish)[0]}
      />
    </div>
  );
};

export default Main;
