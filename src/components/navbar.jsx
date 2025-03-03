import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img
                src="https://www.soliduscapitals.com/wp-content/uploads/2019/08/CS.jpg"
                alt="logo"
                className="rounded-circle"
                style={{ height: '40px', width: '45px' }}
              />
              <span style={{ fontSize: '13px', fontWeight: 'bold', marginLeft: '5px', fontFamily: 'dubai' }}>
                Preeti K Agrawal <br />& Associates
              </span>
            </div>
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto" style={{marginRight: '40px'}}> {/* Added ms-auto here */}
              <li className="nav-item">
                <Link className="nav-link active ms-4" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active ms-4" aria-current="page" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active ms-4" aria-current="page" to="/aboutus">About Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
