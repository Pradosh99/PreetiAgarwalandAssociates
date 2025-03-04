import React from 'react';
import { Link } from 'react-router-dom';
const IndustrialLicensing = () => {
  return (
    <div className="container py-5">
      {/* Page Title with Image */}
      <div className="text-center mb-5">
        <img 
          src="https://kccbiolabs.com/wp-content/uploads/2023/08/complience005.png" 
          alt="Industrial Licensing Services" 
          className="img-fluid mb-4 rounded"
          style={{ maxHeight: '300px', objectFit: 'cover' }}
        />
        <h2 className="fw-bold" style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
          Industrial Licensing Services
        </h2>
        <p className="lead" style={{ fontSize: '1.1rem', color: '#555' }}>
          We provide comprehensive Industrial Licensing services to help businesses navigate the complexities of obtaining necessary licenses and complying with regulatory requirements. Our expert team ensures your business is set up for success in the industrial sector.
        </p>
      </div>

      {/* Service Information */}
      <div className='bg-white p-5'>
        <h3 className="fw-bold mb-4" style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
          Key Industrial Licensing Services We Offer:
        </h3>

        {/* Service Point 1: Micro, Small & Medium Industries (MSME) Act */}
        <div className="mb-5">
          <h4 className="fw-bold">Micro, Small & Medium Industries (MSME) Act</h4>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            We assist businesses in understanding and complying with the MSME Act. Our experts guide you through the registration process, enabling you to access various benefits and subsidies available under this Act for your micro, small, or medium enterprise.
          </p>
        </div>

        {/* Service Point 2: Industrial Entrepreneur’s Memorandum (IEM) */}
        <div className="mb-5">
          <h4 className="fw-bold">Industrial Entrepreneur’s Memorandum (IEM)</h4>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            Our team provides professional services in the preparation and submission of the Industrial Entrepreneur's Memorandum (IEM), which is required for setting up an industrial unit in India. We ensure that all the necessary documentation is in place for your application.
          </p>
        </div>

        {/* Service Point 3: Consultancy in Respect of MIDC Matters */}
        <div className="mb-5">
          <h4 className="fw-bold">Consultancy in Respect of MIDC Matters</h4>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            We offer expert consultancy services related to the Maharashtra Industrial Development Corporation (MIDC), including land acquisition, project approvals, and compliance with the regulatory frameworks in place. Our team helps streamline your interactions with MIDC to ensure timely approvals and smooth processes.
          </p>
        </div>
      </div>

      {/* Contact Button Section */}
      <div className="text-center mt-5">
        <p className="lead" style={{ fontSize: '1.2rem', color: '#555' }}>
          Ready to begin the process of obtaining industrial licenses or need expert guidance? Contact us today to get started with our Industrial Licensing services.
        </p>
        <Link to="/contactus" className="btn btn-primary btn-lg">
        Contact Us
        </Link>
      </div>
    </div>
  );
};

export default IndustrialLicensing;
