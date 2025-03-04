import React from 'react';
import { Link } from 'react-router-dom';

const SebiIpo = () => {
  return (
    <div className="container py-5">
      {/* Page Title with Image */}
      <div className="text-center mb-5">
        <img 
          src="https://www.livelaw.in/h-upload/2024/05/24/750x450_541364-sebi.webp" 
          alt="SEBI Matters and IPO Services" 
          className="img-fluid mb-4 rounded"
          style={{ maxHeight: '300px', objectFit: 'cover' }}
        />
        <h2 className="fw-bold" style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
          SEBI Matters & IPO Services
        </h2>
        <p className="lead" style={{ fontSize: '1.1rem', color: '#555' }}>
          We provide expert advisory services for handling SEBI matters and assisting in Initial Public Offerings (IPOs). Our team ensures smooth and compliant processes for all your SEBI-related requirements and IPO filings.
        </p>
      </div>

      {/* Service Information */}
      <div className='bg-white p-5'>
        <h3 className="fw-bold mb-4" style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
          Key SEBI and IPO Services We Offer:
        </h3>

        {/* Service Point 1: Advisory and Co-ordination */}
        <div className="mb-5">
          <h4 className="fw-bold">Advisory and Co-ordination</h4>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            We offer comprehensive advisory services for SEBI compliance, guiding you through regulatory matters and the IPO process. Our experts assist in coordinating with relevant authorities, ensuring all necessary approvals and documentation are in place for a successful IPO.
          </p>
        </div>

        {/* Service Point 2: Compliance Services */}
        <div className="mb-5">
          <h4 className="fw-bold">Compliance Services</h4>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            Our team ensures that your business meets all SEBI regulations and compliance standards throughout the IPO process. From documentation to filings and post-IPO compliance, we ensure your company adheres to all legal and financial regulations, helping you maintain a strong position in the market.
          </p>
        </div>
      </div>

      {/* Contact Button Section */}
      <div className="text-center mt-5">
        <p className="lead" style={{ fontSize: '1.2rem', color: '#555' }}>
          Need expert guidance for SEBI matters or IPO filing? Contact us today for tailored advice and support.
        </p>
        <Link to="/contactus" className="btn btn-primary btn-lg">
                        Contact Us
                        </Link>
      </div>
    </div>
  );
};

export default SebiIpo;
