import React from 'react';

const Aboutus = () => {
  return (
    <div className="container py-5">
      {/* Company Logo and Name */}
      <div className="text-center mb-4">
        <img 
          src="https://www.soliduscapitals.com/wp-content/uploads/2019/08/CS.jpg" 
          alt="Preeti K Agrawal & Associates Logo" 
          className="img-fluid rounded-circle" 
          style={{ maxWidth: '200px', marginBottom: '20px', height: '200px' }}
        />
        <h2 className="fw-bold" style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
          Preeti K Agrawal & Associates
        </h2>
      </div>

      {/* About the Company Section */}
      <div className="text-center mb-5">
        <p style={{ fontSize: '1.1rem', color: '#555' }}>
          Preeti K Agrawal & Associates is a leading firm specializing in corporate secretarial services, offering a comprehensive range of compliance and legal solutions for businesses. We assist clients with their legal and regulatory requirements while ensuring they stay compliant with the evolving legal landscape. 
        </p>
        <p style={{ fontSize: '1.1rem', color: '#555' }}>
          With a team of experienced professionals, we provide personalized services tailored to your business needs, helping you navigate the complexities of corporate governance, compliance, and more.
        </p>
      </div>

      {/* List of Services */}
      <div className="text-center mb-5">
        <h3 className="fw-bold" style={{ color: '#333' }}>Our Services</h3>
        <p className="lead" style={{ fontSize: '1.1rem', color: '#555' }}>
          We offer a wide range of services to ensure your business stays compliant and legally sound:
        </p>
      </div>

      <ul className="list-group">
        {/* Service 1 */}
        <li className="list-group-item">
          <strong>Company Formation & LLP</strong> – Assisting in setting up your business with full compliance and legal support.
        </li>

        {/* Service 2 */}
        <li className="list-group-item">
          <strong>FEMA & RBI Matters</strong> – Expert advice on inbound and outbound investments, foreign partnerships, and more.
        </li>

        {/* Service 3 */}
        <li className="list-group-item">
          <strong>Compliance & Audit</strong> – Ensuring your company complies with regulatory requirements, including secretarial audits.
        </li>

        {/* Service 4 */}
        <li className="list-group-item">
          <strong>Merger & De-merger</strong> – Specialized legal and regulatory support for smooth mergers and demergers.
        </li>

        {/* Service 5 */}
        <li className="list-group-item">
          <strong>Agreements & Petitions</strong> – Drafting and vetting of various agreements and petitions, along with legal consultation.
        </li>

        {/* Service 6 */}
        <li className="list-group-item">
          <strong>Corporate Governance</strong> – Helping businesses with compliance, governance audits, and advising on board structure and policies.
        </li>

        {/* Service 7 */}
        <li className="list-group-item">
          <strong>Industrial Licensing</strong> – Assistance with MSME, IEM, and MIDC matters, along with guidance on industrial licenses.
        </li>

        {/* Service 8 */}
        <li className="list-group-item">
          <strong>XBRL Filing</strong> – Conversion of financial data into XBRL format, validation, certification, and filing.
        </li>

        {/* Service 9 */}
        <li className="list-group-item">
          <strong>SEBI Matters & IPO</strong> – Advisory services and compliance for SEBI matters and IPO procedures.
        </li>
      </ul>
    </div>
  );
};

export default Aboutus;
