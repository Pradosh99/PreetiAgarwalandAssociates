import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src="https://www.soliduscapitals.com/wp-content/uploads/2019/08/CS.jpg"
              alt="logo"
              className="rounded-circle"
              style={{ height: '40px', width: '45px' }}
            />
            <span
              style={{
                fontSize: '14px',
                fontWeight: 'bold',
                marginLeft: '10px',
                fontFamily: 'Arial, sans-serif',
              }}
            >
              Preeti K Agrawal <br />& Associates
            </span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active ms-4 fs-5 navbar-item"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active ms-4 fs-5 navbar-item"
                  aria-current="page"
                  to="/services"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active ms-4 fs-5 navbar-item"
                  aria-current="page"
                  to="/aboutus"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
