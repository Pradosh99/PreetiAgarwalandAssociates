import React from 'react';
import { Link } from 'react-router-dom';
const ComplianceAudit = () => {
  return (
    <div className="container py-5">
      {/* Page Title with Image */}
      <div className="text-center mb-5">
        <img 
          src="https://static.wixstatic.com/media/ec2c1d_225c553e1b104ab6ab33e354373f7c31~mv2.png/v1/fill/w_216,h_154,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo%20(2).png" 
          alt="Compliance and Audit Services" 
          className="img-fluid mb-4 rounded"
          style={{ maxHeight: '300px', objectFit: 'cover' }}
        />
        <h2 className="fw-bold" style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
          Compliance & Audit Services
        </h2>
        <p className="lead" style={{ fontSize: '1.1rem', color: '#555' }}>
          Ensuring that your business stays compliant with all regulatory requirements and operates smoothly with the right audit practices.
        </p>
      </div>

      {/* Service Information */}
      <div className='bg-white p-5'>
        <h3 className="fw-bold mb-4" style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
          Key Compliance and Audit Services We Offer:
        </h3>
        
        {/* Service Point 1: Documentation in Respect of Board and General Meetings */}
        <div className="mb-5">
          <h4 className="fw-bold">Documentation in Respect of Board and General Meetings</h4>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            We assist in documenting minutes and resolutions for Board and General Meetings, ensuring compliance with corporate governance standards and legal requirements.
          </p>
        </div>

        {/* Service Point 2: Preparation and Certification of Various Forms */}
        <div className="mb-5">
          <h4 className="fw-bold">Preparation and Certification of Various Forms</h4>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            Our team prepares and certifies statutory forms required for filing with regulatory authorities, ensuring timely and accurate submission to avoid any legal hassles.
          </p>
        </div>

        {/* Service Point 3: Up-dating Statutory Records & Registers */}
        <div className="mb-5">
          <h4 className="fw-bold">Up-dating Statutory Records & Registers</h4>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            We help in keeping all statutory registers and records up-to-date as per the legal requirements, including maintaining the Register of Members, Directors, and Shareholder records.
          </p>
        </div>

        {/* Service Point 4: Attending the Board / General Meetings */}
        <div className="mb-5">
          <h4 className="fw-bold">Attending the Board / General Meetings</h4>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            We provide secretarial support in attending Board and General Meetings, ensuring compliance with corporate laws and proper documentation of meeting minutes.
          </p>
        </div>

        {/* Service Point 5: Secretarial Audit */}
        <div className="mb-5">
          <h4 className="fw-bold">Secretarial Audit</h4>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            We perform comprehensive secretarial audits to assess compliance with the Companies Act, other statutory regulations, and corporate governance norms.
          </p>
        </div>

        {/* Service Point 6: Changes in Memorandum and Articles of Association */}
        <div className="mb-5">
          <h4 className="fw-bold">Changes in Memorandum and Articles of Association</h4>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            We assist with drafting, filing, and obtaining approval for changes in the Memorandum and Articles of Association, in compliance with the legal framework.
          </p>
        </div>

        {/* Service Point 7: Name Change, Object Change, and Shifting of Registered Office */}
        <div className="mb-5">
          <h4 className="fw-bold">Name Change, Object Change, and Shifting of Registered Office</h4>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            We provide comprehensive support for changing your company’s name, business objectives, or shifting your registered office, ensuring compliance with all regulatory procedures.
          </p>
        </div>

        {/* Service Point 8: Conversion of the Company into Public or Private or LLP */}
        <div className="mb-5">
          <h4 className="fw-bold">Conversion of the Company into Public or Private or LLP</h4>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            Our team assists in the conversion of your company into a public or private company or an LLP. We handle the necessary documentation, filings, and regulatory procedures for smooth transitions.
          </p>
        </div>

        {/* Service Point 9: Search and Registration of Charges */}
        <div className="mb-5">
          <h4 className="fw-bold">Search and Registration of Charges</h4>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            We assist in conducting a thorough search and registering charges in compliance with the Companies Act, safeguarding your business interests and ensuring proper legal formalities.
          </p>
        </div>

        {/* Service Point 10: Providing Bank Due Diligence Certificate */}
        <div className="mb-5">
          <h4 className="fw-bold">Providing Bank Due Diligence Certificate</h4>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            We provide services related to bank due diligence certification, ensuring that your financial records meet regulatory requirements for loans and financial assessments.
          </p>
        </div>

        {/* Service Point 11: ESOP and SAR - Consultancy and Documentation */}
        <div className="mb-5">
          <h4 className="fw-bold">ESOP and SAR - Consultancy and Documentation</h4>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            We provide consultancy and documentation services for Employee Stock Option Plans (ESOPs) and Stock Appreciation Rights (SARs), helping businesses structure employee benefit plans.
          </p>
        </div>

        {/* Service Point 12: CSR Consultancy, CSR Policy Drafting and Advising */}
        <div>
          <h4 className="fw-bold">CSR Consultancy, CSR Policy Drafting and Advising</h4>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            We provide end-to-end Corporate Social Responsibility (CSR) consultancy, including drafting CSR policies and advising businesses on compliance with CSR regulations.
          </p>
        </div>
      </div>

      {/* Contact Button Section */}
      <div className="text-center mt-5">
        <p className="lead" style={{ fontSize: '1.2rem', color: '#555' }}>
          Looking for expert compliance and audit services? Get in touch with us today for tailored solutions.
        </p>
        <Link to="/contactus" className="btn btn-primary btn-lg">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default ComplianceAudit;
