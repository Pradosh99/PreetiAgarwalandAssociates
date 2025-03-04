import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Section: Logo and Company Name */}
          <div className="col-md-6 mb-3 mb-md-0">
            <div className="d-flex align-items-center">
              <img
                src="https://www.soliduscapitals.com/wp-content/uploads/2019/08/CS.jpg"  // Replace with your logo
                alt="Company Logo"
                className="rounded-circle"
                style={{ height: '40px', width: '45px' }}
              />
              <h5 className="mb-0">Preeti K Agrawal & Associates</h5>
            </div>
          </div>

          {/* Right Section: Quick Links */}
          <div className="col-md-6 text-center text-md-end">
            <ul className="list-unstyled d-flex justify-content-center justify-content-md-end mb-0">
              <li className="me-4">
                <Link to="/choose" className="text-white text-decoration-none hover-link">Why Choose Us</Link>
              </li>
              <li className="me-4">
                <Link to="/aboutus" className="text-white text-decoration-none hover-link">About Us</Link>
              </li>
              <li>
                <Link to="/contactus" className="text-white text-decoration-none hover-link">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section: Copyright */}
        <div className="text-center mt-4">
          <p className="mb-0 small" style={{ opacity: 0.7 }}>
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
