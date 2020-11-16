import React from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Contact from './Contact';
import About from './AboutComponent';
import Header from './Header';
import Footer from './Footer';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';

const Main = ({ dishes, comments,  leaders, promotions }) => {
  function DishWithId() {
    let { dishId } = useParams();

    return (
      <DishDetail
        dish={dishes.filter((dish) => dish.id === parseInt(dishId, 10))[0]}
        comments={comments.filter(
          (comment) => comment.dishId === parseInt(dishId, 10)
        )}
      />
    );
  }

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
        <Route path="/menu" element={<Menu dishes={dishes} />} />
        <Route path="/menu/:dishId" element={<DishWithId />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About leaders={leaders} />} />
        <Navigate to="/home" />
      </Routes>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};



export default connect(mapStateToProps)(Main);
