import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  Jumbotron,
  NavbarToggler,
  Collapse,
  NavItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  Input,
  Form,
} from 'reactstrap';

import { NavLink } from 'react-router-dom';
import {
  FaAddressBook,
  FaHome,
  FaInfo,
  FaList,
  FaSignInAlt,
} from 'react-icons/fa';

const Header = () => {
  const [isNavOpen, setIsOpen] = useState(false);
  const [isModalOpen, setModal] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const toggleNav = () => {
    setIsOpen(!isNavOpen);
  };

  const toggleModal = () => {
    setModal(!isModalOpen);
  };

  const handleLogin = (e) => {
    toggleModal();
    e.preventDefault();
  };

  const handleUsername = (e) => {
    console.log(e.target.value);
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
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
            <Nav navbar>
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
            <Nav navbar className="ml-auto">
              <NavItem>
                <Button outline onClick={toggleModal}>
                  <FaSignInAlt /> Login
                </Button>
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

      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Login</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleLogin}>
            <FormGroup>
              <Label htmlFor="username">Username</Label>
              <Input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={handleUsername}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handlePassword}
              />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" name="remember" />
                Remember me
              </Label>
            </FormGroup>
            <Button type="submit" color="primary" onClick={handleLogin}>
              Login
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default Header;
