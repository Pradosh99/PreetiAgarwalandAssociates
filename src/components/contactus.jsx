import React from 'react';

const Contactus = () => {
  return (
    <div className="container py-5">
      {/* Company Logo */}
      <div className="text-center mb-5">
        <img
          src="https://www.soliduscapitals.com/wp-content/uploads/2019/08/CS.jpg" // Replace with your logo URL
          alt="Company Logo"
          className='rounded-circle'
          style={{ maxWidth: '200px', height: '200px' }}
        />
        <h2 className="fw-bold mt-3" style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>Contact Us</h2>
        <p className="lead" style={{ fontSize: '1.1rem', color: '#555' }}>
          We're here to assist you with all your corporate compliance and legal needs. Reach out to us today!
        </p>
      </div>

      {/* Contact Information in One Row */}
      <div className="row">
        {/* Address */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-lg border-light rounded p-4 d-flex align-items-center" style={{ height: '100%' }}>
          <img 
                src="https://cdn-icons-png.flaticon.com/512/1395/1395433.png" 
                alt="address" 
                className="card-img-top" 
                style={{ height: '90px', objectFit: 'contain', marginTop: '15px', marginBottom: '10px' }} 
              />
            <h4 className="fw-bold" style={{ color: '#333' }}>Our Office Address</h4>
            <p style={{ fontSize: '1rem', color: '#555', textAlign: 'center' }}>
              CS Preeti Agrawal <br />
              D-3/25, Tridal Nagar, Yerwada, <br />
              Pune – 411 006, Maharashtra, India
            </p>
          </div>
        </div>

        {/* Contact Numbers */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-lg border-light rounded p-4 d-flex align-items-center" style={{ height: '100%' }}>
          <img 
                src="https://cdn-icons-png.flaticon.com/512/455/455604.png" 
                alt="address" 
                className="card-img-top" 
                style={{ height: '90px', objectFit: 'contain', marginTop: '15px', marginBottom: '10px' }} 
              />
            <h4 className="fw-bold" style={{ color: '#333' }}>Contact Numbers</h4>
            <p style={{ fontSize: '1rem', color: '#555', textAlign: 'center' }}>
              Phone: <strong>888 888 0195</strong> / <strong>985 008 4716</strong>
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-lg border-light rounded p-4 d-flex align-items-center" style={{ height: '100%' }}>
          <img 
                src="https://cdn-icons-png.flaticon.com/512/1944/1944250.png" 
                alt="address" 
                className="card-img-top" 
                style={{ height: '90px', objectFit: 'contain', marginTop: '15px', marginBottom: '10px' }} 
              />
            <h4 className="fw-bold" style={{ color: '#333' }}>Email</h4>
            <p style={{ fontSize: '1rem', color: '#555', textAlign: 'center' }}>
              You can reach us at: <br />
              <strong>cspreetiagrawal1@gmail.com</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
