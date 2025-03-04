import React from 'react';
import { Link } from 'react-router-dom';

const MergerDemergers = () => {
  return (
    <div className="container py-5">
      {/* Page Title with Image */}
      <div className="text-center mb-5">
        <img 
          src="https://www.indiafilings.com/learn/wp-content/uploads/2018/03/Demerger.jpg" 
          alt="Merger and Demerger Services" 
          className="img-fluid mb-4 rounded"
          style={{ maxHeight: '300px', objectFit: 'cover' }}
        />
        <h2 className="fw-bold" style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
          Merger & Demerger Services
        </h2>
        <p className="lead" style={{ fontSize: '1.1rem', color: '#555' }}>
          Our services offer expert solutions for mergers, demergers, acquisitions, and other corporate restructuring processes, ensuring smooth transitions with compliance at every step.
        </p>
      </div>

      {/* Service Information */}
      <div className='bg-white p-5'>
        <h3 className="fw-bold mb-4" style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
          Key Merger and Demerger Services We Offer:
        </h3>

        {/* Service Point 1: Mergers and Demergers */}
        <div className="mb-5">
          <h4 className="fw-bold">Mergers and Demergers</h4>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            We provide comprehensive support for mergers and demergers, ensuring legal compliance and smooth business transitions, helping your organization restructure for strategic growth.
          </p>
        </div>

        {/* Service Point 2: Acquisitions and Takeovers */}
        <div className="mb-5">
          <h4 className="fw-bold">Acquisitions and Takeovers</h4>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            Our team offers expert advisory and execution services for acquisitions and takeovers, handling all aspects of the deal from legal documentation to regulatory approvals, ensuring a seamless transaction.
          </p>
        </div>

        {/* Service Point 3: Reduction / Buy Back of Share Capital */}
        <div className="mb-5">
          <h4 className="fw-bold">Reduction / Buy Back of Share Capital</h4>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            We assist with the reduction of share capital or buyback of shares in compliance with relevant regulations, ensuring that your financial strategies align with business objectives and legal norms.
          </p>
        </div>

        {/* Service Point 4: Liquidation and Winding Up of Companies */}
        <div className="mb-5">
          <h4 className="fw-bold">Liquidation and Winding Up of Companies</h4>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            We provide legal and strategic support for the liquidation and winding-up of companies, ensuring that all financial, legal, and regulatory obligations are met in a smooth and efficient manner.
          </p>
        </div>

        {/* Service Point 5: Financial Restructuring */}
        <div>
          <h4 className="fw-bold">Financial Restructuring</h4>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            Our experts provide solutions for financial restructuring, helping businesses navigate complex financial challenges, optimize resources, and ensure long-term sustainability.
          </p>
        </div>
      </div>

      {/* Contact Button Section */}
      <div className="text-center mt-5">
        <p className="lead" style={{ fontSize: '1.2rem', color: '#555' }}>
          Looking for expert merger and demerger advisory? Contact us to discuss tailored solutions for your business.
        </p>
        <Link to="/contactus" className="btn btn-primary btn-lg">
                  Contact Us
                </Link>
      </div>
    </div>
  );
};

export default MergerDemergers;
