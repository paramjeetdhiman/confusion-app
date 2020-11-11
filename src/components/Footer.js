import React from 'react';
import {
  FaTwitter,
  FaFacebook,
  FaGooglePlusG,
  FaEnvelope,
  FaYoutube,
  FaLinkedin,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-4 offset-1 col-sm-2">
              <h5>Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Menu</a>
                </li>
                <li>
                  <a href="contactus.html">Contact</a>
                </li>
              </ul>
            </div>
            <div className="col-7 col-sm-5">
              <h5>Our Address</h5>
              <address>
                121, Clear Water Bay Road
                <br />
                Clear Water Bay, Kowloon
                <br />
                HONG KONG
                <br />
                <i className="fa fa-phone fa-lg"></i>: +852 1234 5678
                <br />
                <i className="fa fa-fax fa-lg"></i>: +852 8765 4321
                <br />
                <i className="fa fa-envelope fa-lg"></i>:{' '}
                <a href="mailto:confusion@food.net">confusion@food.net</a>
              </address>
            </div>
            <div className="col-12 col-sm-4 align-self-center">
              <div className="text-center">
                <a
                  className="btn btn-social-icon btn-google"
                  href="http://google.com/+">
                  <FaGooglePlusG />
                </a>
                <a
                  className="btn btn-social-icon btn-facebook"
                  href="http://www.facebook.com/profile.php?id=">
                  <FaFacebook />
                </a>
                <a
                  className="btn btn-social-icon btn-linkedin"
                  href="http://www.linkedin.com/in/">
                  <FaLinkedin />
                </a>
                <a
                  className="btn btn-social-icon btn-twitter"
                  href="http://twitter.com/">
                  <FaTwitter />
                </a>
                <a
                  className="btn btn-social-icon btn-google"
                  href="http://youtube.com/">
                  <FaYoutube />
                </a>
                <a className="btn btn-social-icon" href="mailto:">
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-auto">
              <p>© Copyright 2018 Ristorante Con Fusion</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
