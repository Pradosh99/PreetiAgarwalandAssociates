import React from 'react';
import { Link } from 'react-router-dom';
const CorporateGovernance = () => {
  return (
    <div className="container py-5">
      {/* Page Title with Image */}
      <div className="text-center mb-5">
        <img 
          src="https://cdn.iconscout.com/icon/free/png-256/free-corporate-governance-icon-download-in-svg-png-gif-file-formats--project-development-management-planning-teamwork-pack-business-icons-1836755.png" 
          alt="Corporate Governance Services" 
          className="img-fluid mb-4 rounded"
          style={{ maxHeight: '300px', objectFit: 'cover' }}
        />
        <h2 className="fw-bold" style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
          Corporate Governance Services
        </h2>
        <p className="lead" style={{ fontSize: '1.1rem', color: '#555' }}>
          We provide comprehensive corporate governance services that ensure your business operates transparently, ethically, and in compliance with regulations. Our services enhance decision-making and align your company’s governance with best practices.
        </p>
      </div>

      {/* Service Information */}
      <div className='bg-white p-5'>
        <h3 className="fw-bold mb-4" style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
          Key Corporate Governance Services We Offer:
        </h3>

        {/* Service Point 1: Assisting in Periodical Corporate Governance Compliance and Audit */}
        <div className="mb-5">
          <h4 className="fw-bold">Assisting in Periodical Corporate Governance Compliance and Audit</h4>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            We help ensure that your company adheres to the necessary corporate governance standards and regulations. Our team conducts periodic audits and compliance checks to ensure your governance framework remains robust and aligned with best practices.
          </p>
        </div>

        {/* Service Point 2: Preparing Corporate Governance Reports */}
        <div className="mb-5">
          <h4 className="fw-bold">Preparing Corporate Governance Reports</h4>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            Our experts prepare detailed Corporate Governance reports that outline the company’s governance structure, compliance, and performance. These reports help stakeholders understand the transparency and accountability of your corporate operations.
          </p>
        </div>

        {/* Service Point 3: Advising on the Composition of the Board of Directors and Committees */}
        <div className="mb-5">
          <h4 className="fw-bold">Advising on the Composition of the Board of Directors and Committees</h4>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            We provide guidance on optimizing the composition of your Board of Directors and various Committees to ensure proper decision-making, diversity, and compliance with regulatory standards.
          </p>
        </div>

        {/* Service Point 4: Assist in Drafting Various Policies */}
        <div className="mb-5">
          <h4 className="fw-bold">Assist in Drafting Various Policies</h4>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            We help draft corporate governance policies, including ethics, compliance, conflict of interest, and whistleblowing policies, ensuring they align with the organization’s values and regulatory requirements.
          </p>
        </div>

        {/* Service Point 5: Acting as Advisory Board Members */}
        <div className="mb-5">
          <h4 className="fw-bold">Acting as Advisory Board Members</h4>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            Our experts can act as advisory board members, offering strategic advice and insights to improve the overall governance and performance of your organization, while ensuring the long-term success of your business.
          </p>
        </div>

        {/* Service Point 6: Acting as Independent Director */}
        <div>
          <h4 className="fw-bold">Acting as Independent Director</h4>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            We provide professional independent directors to your board who offer unbiased perspectives on governance practices, ensuring compliance, strategic guidance, and ethical decision-making at the highest levels of your company.
          </p>
        </div>
      </div>

      {/* Contact Button Section */}
      <div className="text-center mt-5">
        <p className="lead" style={{ fontSize: '1.2rem', color: '#555' }}>
          Looking for expert corporate governance services to enhance your business performance? Contact us today to get started.
        </p>
        <Link to="/contactus" className="btn btn-primary btn-lg">
                         Contact Us
                       </Link>
      </div>
    </div>
  );
};

export default CorporateGovernance;
