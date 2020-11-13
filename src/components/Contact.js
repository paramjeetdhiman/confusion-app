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
  FormFeedback,
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
    touched: {
      firstName: false,
      lastName: false,
      phone: false,
      email: false,
    },
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
  };

  const handleBlur = (field) => (evt) => {
    setPerson({
      ...person,
      touched: {
        ...person.touched,
        [field]: true,
      },
    });
  };

  console.log(person);

  const validate = (firstName, lastName, phone, email) => {
    const errors = {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
    };
    if (person.touched.firstName && firstName.length < 3)
      errors.firstName = 'First Name  should be >= 3 characters';
    else if (person.touched.firstName && firstName.length > 10) {
      errors.firstName = 'First Name  should be <= 10 characters';
    }

    if (person.touched.lastName && lastName.length < 3)
      errors.lastName = 'Last Name  should be >= 3 characters';
    else if (person.touched.lastName && lastName.length > 10) {
      errors.lastName = 'Last Name  should be <= 10 characters';
    }

    const reg = /^\d+$/; // string of characters should be number
    if (person.touched.phone && !reg.test(phone)) {
      errors.phone = 'Phone number should contain only numbers';
    }

    if (
      person.touched.email &&
      email.split('').filter((x) => x === '@').length !== 1
    ) {
      errors.email = 'Email should contain  @ symbol.';
    }

    return errors;
  };

  const errors = validate(
    person.firstName,
    person.lastName,
    person.phone,
    person.email
  );

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
            <a role="button" className="btn btn-info" href="/">
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
                  valid={errors.firstName === ''}
                  invalid={errors.firstName !== ''}
                  placeholder="First Name"
                  value={person.firstName}
                  onBlur={handleBlur('firstName')}
                  onChange={handleInputChange}
                />
                <FormFeedback>{errors.firstName}</FormFeedback>
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
                  valid={errors.lastName === ''}
                  invalid={errors.lastName !== ''}
                  placeholder="Last Name"
                  value={person.lastName}
                  onBlur={handleBlur('lastName')}
                  onChange={handleInputChange}
                />
                <FormFeedback>{errors.lastName}</FormFeedback>
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
                  valid={errors.phone === ''}
                  invalid={errors.phone !== ''}
                  value={person.phone}
                  onBlur={handleBlur('phone')}
                  onChange={handleInputChange}
                />
                <FormFeedback>{errors.phone}</FormFeedback>
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
                  valid={errors.email === ''}
                  invalid={errors.email !== ''}
                  placeholder="Email"
                  onBlur={handleBlur('email')}
                  value={person.email}
                  onChange={handleInputChange}
                />
                <FormFeedback>{errors.email}</FormFeedback>
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
