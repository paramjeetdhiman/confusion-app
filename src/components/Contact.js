import React from 'react';
import {
  FaEnvelope,
  FaEnvelopeOpen,
  FaFax,
  FaPhoneAlt,
  FaSkype,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const Contact = () => {
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
    </div>
  );
};

export default Contact;
