import React from 'react';
import { Link } from 'react-router-dom';
const AgreementsPetitions = () => {
  return (
    <div className="container py-5">
      {/* Page Title with Image */}
      <div className="text-center mb-5">
        <img 
          src="https://cdn-icons-png.flaticon.com/512/9501/9501126.png" 
          alt="Agreements and Petitions Services" 
          className="img-fluid mb-4 rounded"
          style={{ maxHeight: '300px', objectFit: 'cover' }}
        />
        <h2 className="fw-bold" style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
          Agreements & Petitions Services
        </h2>
        <p className="lead" style={{ fontSize: '1.1rem', color: '#555' }}>
          We specialize in the drafting, vetting, and legal support of various agreements and petitions, ensuring your business transactions are legally sound and compliant with all applicable regulations.
        </p>
      </div>

      {/* Service Information */}
      <div className='bg-white p-5'>
        <h3 className="fw-bold mb-4" style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
          Key Agreement and Petition Services We Offer:
        </h3>

        {/* Service Point 1: Drafting / Vetting of Various JV Agreements */}
        <div className="mb-5">
          <h4 className="fw-bold">Drafting / Vetting of Various JV Agreements</h4>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            Our team assists in the drafting and vetting of Joint Venture (JV) Agreements, ensuring your business partnerships are structured clearly, with well-defined roles, rights, and obligations for all parties involved.
          </p>
        </div>

        {/* Service Point 2: Share Subscription and Shareholders Agreements */}
        <div className="mb-5">
          <h4 className="fw-bold">Share Subscription and Shareholders Agreements</h4>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            We provide expert legal services in drafting Share Subscription and Shareholders Agreements, which outline the terms, rights, and responsibilities of shareholders, ensuring proper corporate governance and protecting the interests of all stakeholders.
          </p>
        </div>

        {/* Service Point 3: Commercial Agreements */}
        <div className="mb-5">
          <h4 className="fw-bold">Commercial Agreements</h4>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            Our team drafts and reviews commercial agreements, ensuring your business contracts with clients, suppliers, and other parties are legally binding and compliant with all applicable laws and regulations.
          </p>
        </div>

        {/* Service Point 4: Appearing Before Regulatory Authorities */}
        <div className="mb-5">
          <h4 className="fw-bold">Appearing Before National Company Law Tribunal (NCLT), Ministry of Corporate Affairs (MCA), and Others</h4>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            We provide legal representation and appear before the National Company Law Tribunal, Ministry of Corporate Affairs, Regional Directors, and the Registrar of Companies, ensuring that your legal matters are handled with expertise and professionalism.
          </p>
        </div>

        {/* Service Point 5: Legal Opinion */}
        <div className="mb-5">
          <h4 className="fw-bold">Legal Opinion</h4>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            Our team offers expert legal opinions on a wide range of business and corporate matters, ensuring you receive the guidance needed to make informed decisions and mitigate legal risks.
          </p>
        </div>

        {/* Service Point 6: Coordination with Solicitors and Advocates */}
        <div>
          <h4 className="fw-bold">Coordination with Solicitors and Advocates</h4>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            We facilitate coordination with solicitors and advocates, ensuring that all legal aspects of your agreements and petitions are carefully handled with expertise and in compliance with the law.
          </p>
        </div>
      </div>

      {/* Contact Button Section */}
      <div className="text-center mt-5">
        <p className="lead" style={{ fontSize: '1.2rem', color: '#555' }}>
          Looking for expert legal services for your business agreements and petitions? Contact us to get started.
        </p>
        <Link to="/contactus" className="btn btn-primary btn-lg">
                  Contact Us
                </Link>
      </div>
    </div>
  );
};

export default AgreementsPetitions;
