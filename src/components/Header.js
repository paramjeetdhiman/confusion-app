import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  Jumbotron,
  NavbarToggler,
  Collapse,
  NavItem,
} from 'reactstrap';

import { NavLink } from 'react-router-dom';
import { FaAddressBook, FaHome, FaInfo, FaList } from 'react-icons/fa';

const Header = () => {
  const [isNavOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isNavOpen);
  };
  return (
    <>
      <Navbar dark expand="md">
        <div className="container">
          <NavbarToggler onClick={toggleNav}></NavbarToggler>
          <NavbarBrand className="mr-auto" href="/">
            <img
              src="assets/images/logo.png"
              height="30"
              width="41"
              alt="Ristornate Con Fusion"
            />
          </NavbarBrand>
          <Collapse navbar isOpen={isNavOpen}>
            <Nav navbar className="ml-auto">
              <NavItem>
                <NavLink className="nav-link" to="/home">
                  <FaHome /> Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/about">
                  <FaInfo /> About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/menu">
                  <FaList /> Menu
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/contact">
                  <FaAddressBook /> Contact
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>

      <Jumbotron>
        <div className="container">
          <div className="row row-header">
            <div className="col-12 col-sm-6">
              <h1>Restornate Con Fusion</h1>
              <p>
                We take inspiration from the World's best cuisines,and create a
                unique fusion experience. Our lipsmacking creations will tickle
                your culinary senses!
              </p>
            </div>
          </div>
        </div>
      </Jumbotron>
    </>
  );
};

export default Header;
