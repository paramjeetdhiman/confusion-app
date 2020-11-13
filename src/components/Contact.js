import React, { useState } from 'react';
import {
  FaEnvelope,
  FaEnvelopeOpen,
  FaFax,
  FaPhoneAlt,
  FaSkype,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  FormGroup,
  Form,
  Label,
  Input,
  Col,
} from 'reactstrap';

const Contact = () => {
  const [person, setPerson] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    agree: false,
    contactType: 'Tel.',
    message: '',
  });

  const handleInputChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setPerson((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Current state is : ' + JSON.stringify(person));
    alert('Current state is : ' + JSON.stringify(person));
  };

  console.log(person);

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Contact</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Contact</h3>
          <hr />
        </div>
      </div>

      <div className="row row-content">
        <div className="col-12">
          <h3>Location Information</h3>
        </div>
        <div className="col-12 col-sm-4 offset-sm-1">
          <h5>Our Address</h5>
          <address>
            121, Clear Water Bay Road
            <br />
            Clear Water Bay, Kowloon
            <br />
            HONG KONG
            <br />
            <FaPhoneAlt />: +852 1234 5678
            <br />
            <FaFax />: +852 8765 4321
            <br />
            <FaEnvelope />:
            <a href="mailto:confusion@food.net">confusion@food.net</a>
          </address>
        </div>
        <div className="col-12 col-sm-6 offset-sm-1">
          <h5>Map of our Location</h5>
        </div>
        <div className="col-12 col-sm-11 offset-sm-1">
          <div className="btn-group" role="group">
            <a
              role="button"
              className="btn btn-primary"
              href="tel:+85212345678">
              <FaPhoneAlt /> Call
            </a>
            <a role="button" className="btn btn-info">
              <FaSkype /> Skype
            </a>
            <a
              role="button"
              className="btn btn-success"
              href="mailto:confusion@food.net">
              <FaEnvelopeOpen /> Email
            </a>
          </div>
        </div>
      </div>

      <div className="row row-content">
        <div className="col-12">
          <h3>Send us your feedback</h3>
        </div>
        <div className="col-12 col-md-9">
          <Form onSubmit={handleSubmit}>
            <FormGroup row>
              <Label htmlFor="firstName" md={2}>
                First Name
              </Label>
              <Col md={10}>
                <Input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  value={person.firstName}
                  onChange={handleInputChange}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label htmlFor="lastName" md={2}>
                Last Name
              </Label>
              <Col md={10}>
                <Input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  value={person.lastName}
                  onChange={handleInputChange}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label htmlFor="phone" md={2}>
                Contact
              </Label>
              <Col md={10}>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone Number"
                  value={person.phone}
                  onChange={handleInputChange}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label htmlFor="email" md={2}>
                Email
              </Label>
              <Col md={10}>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={person.email}
                  onChange={handleInputChange}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col md={{ size: 6, offset: 2 }}>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="checkbox"
                      name="agree"
                      checked={person.agree}
                      onChange={handleInputChange}
                    />
                    <strong>May we contact you?</strong>
                  </Label>
                </FormGroup>
              </Col>
              <Col md={{ size: 3, offset: 1 }}>
                <Input
                  type="select"
                  name="contactType"
                  onChange={handleInputChange}
                  value={person.contactType}>
                  <option>Tel.</option>
                  <option>Email</option>
                </Input>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label htmlFor="message" md={2}>
                Your Feedback
              </Label>
              <Col md={10}>
                <Input
                  type="textarea"
                  id="message"
                  name="message"
                  rows="12"
                  onChange={handleInputChange}
                  placeholder="Enter your feedback here..."
                  value={person.message}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col md={{ size: 10, offset: 2 }}>
                <Button type="submit" color="primary">
                  Send Feedback
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
