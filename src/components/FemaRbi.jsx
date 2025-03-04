import React from 'react';
import { Link } from 'react-router-dom';
const FemaRbi = () => {
  return (
    <div className="container py-5">
      {/* Page Title with Image */}
      <div className="text-center mb-5">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9D1ErseFxw1-y8k2Ms-SrMvjfRyUfnb6x11tSUyx1RDksNxfrTIXvPcmUrn9axFMrTO4&usqp=CAU" 
          alt="FEMA and RBI Matters" 
          className="img-fluid mb-4 rounded"
          style={{ maxHeight: '300px', objectFit: 'cover' }}
        />
        <h2 className="fw-bold" style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
          FEMA and RBI Matters
        </h2>
        <p className="lead" style={{ fontSize: '1.1rem', color: '#555' }}>
          We provide expert advice and services to help you navigate FEMA and RBI regulations, ensuring compliance and smooth investment processes.
        </p>
      </div>

      {/* Service Information */}
      <div className='bg-white p-5 '>
        <h3 className="fw-bold mb-4" style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
          Key Services We Offer in FEMA and RBI Matters:
        </h3>
        
        {/* Service Point 1: Consultation and Compliance – Inbound and Outbound Investments */}
        <div className="mb-5">
          <h4 className="fw-bold">Consultation and Compliance – Inbound and Outbound Investments</h4>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            We assist in both inbound and outbound investment transactions, ensuring compliance with all relevant FEMA and RBI guidelines. Our services help foreign investors and Indian companies to navigate the regulatory landscape with ease.
          </p>
        </div>

        {/* Service Point 2: Advice and Legal Opinions under FEMA */}
        <div className="mb-5">
          <h4 className="fw-bold">Advice and Legal Opinions under FEMA</h4>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            Our experts provide legal advice and opinions regarding the Foreign Exchange Management Act (FEMA). We ensure that businesses comply with foreign exchange laws and facilitate seamless cross-border transactions.
          </p>
        </div>

        {/* Service Point 3: Investment Strategy for Foreign Companies */}
        <div className="mb-5">
          <h4 className="fw-bold">Investment Strategy for Foreign Companies</h4>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            We develop comprehensive investment strategies for foreign companies looking to invest in India. Our services include market analysis, legal frameworks, and tax implications, all tailored to meet the unique needs of foreign investors.
          </p>
        </div>

        {/* Service Point 4: ECB Processing */}
        <div className="mb-5">
          <h4 className="fw-bold">ECB Processing</h4>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            We guide you through the process of External Commercial Borrowing (ECB) under RBI and FEMA regulations. Our services ensure that you can secure loans from foreign sources while remaining fully compliant with Indian law.
          </p>
        </div>

        {/* Service Point 5: Identification of Suitable Partners for Seeking Ventures */}
        <div className="mb-5">
          <h4 className="fw-bold">Identification of Suitable Partners for Seeking Ventures</h4>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            We assist businesses in identifying potential partners for joint ventures, ensuring that they align with the company's strategic goals and compliance requirements under FEMA and RBI guidelines.
          </p>
        </div>

        {/* Service Point 6: Partnership Negotiations */}
        <div className="mb-5">
          <h4 className="fw-bold">Partnership Negotiations</h4>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            Our team provides expert guidance and support during partnership negotiations. We ensure that the terms of the partnership comply with FEMA and RBI regulations, allowing for smooth and successful collaborations.
          </p>
        </div>

        {/* Service Point 7: Applications under Foreign Contribution Regulation Act (FCRA) */}
        <div>
          <h4 className="fw-bold">Applications under Foreign Contribution Regulation Act (FCRA)</h4>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            We assist in preparing and filing applications under the FCRA, enabling NGOs, trusts, and other entities to receive foreign contributions in compliance with Indian laws. Our services include legal advice, documentation, and timely submissions.
          </p>
        </div>
      </div>

      {/* Contact Button Section */}
      <div className="text-center mt-5">
        <p className="lead" style={{ fontSize: '1.2rem', color: '#555' }}>
          Need help navigating FEMA and RBI regulations? Contact us today for expert assistance!
        </p>
        <Link to="/contactus" className="btn btn-primary btn-lg">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default FemaRbi;
