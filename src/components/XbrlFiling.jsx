import React from 'react';
import { Link } from 'react-router-dom';
const XbrlFiling = () => {
  return (
    <div className="container py-5">
      {/* Page Title with Image */}
      <div className="text-center mb-5">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU_pKBiZ9MGLHrjJqZaqEi3vtsVz7JDGgR4g&s" 
          alt="XBRL Filing Services" 
          className="img-fluid mb-4 rounded"
          style={{ maxHeight: '300px', objectFit: 'cover' }}
        />
        <h2 className="fw-bold" style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
          XBRL Filing Services
        </h2>
        <p className="lead" style={{ fontSize: '1.1rem', color: '#555' }}>
          Our XBRL Filing services help businesses comply with statutory filing requirements by converting their financial data into the XBRL format. We ensure that your filings are accurate, timely, and fully compliant with the regulations.
        </p>
      </div>

      {/* Service Information */}
      <div className='bg-white p-5'>
        <h3 className="fw-bold mb-4" style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
          Key XBRL Filing Services We Offer:
        </h3>

        {/* Service Point 1: Data Input */}
        <div className="mb-5">
          <h4 className="fw-bold">Data Input</h4>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            Our team meticulously gathers and inputs the necessary financial data from your documents to ensure the accuracy and completeness of your filing. We collect all relevant information needed for a successful XBRL conversion.
          </p>
        </div>

        {/* Service Point 2: Conversion of Financial Data into XBRL Format */}
        <div className="mb-5">
          <h4 className="fw-bold">Conversion of Financial Data into XBRL Format</h4>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            We specialize in converting your financial data into the required XBRL format. Our expert team uses advanced tools and software to ensure that the conversion is accurate, seamless, and in compliance with the relevant XBRL taxonomies.
          </p>
        </div>

        {/* Service Point 3: Validation & Pre-scrutiny */}
        <div className="mb-5">
          <h4 className="fw-bold">Validation & Pre-scrutiny</h4>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            Before submission, we perform detailed validation and pre-scrutiny of the XBRL filings to ensure that there are no errors or discrepancies. We conduct rigorous checks to guarantee compliance with all regulatory requirements and reduce the risk of rejections.
          </p>
        </div>

        {/* Service Point 4: Certification & Filing */}
        <div className="mb-5">
          <h4 className="fw-bold">Certification & Filing</h4>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            After validating and finalizing the XBRL files, we provide certification of the filing and ensure its submission to the relevant authorities on time. Our team ensures that your filing meets all necessary compliance guidelines.
          </p>
        </div>
      </div>

      {/* Contact Button Section */}
      <div className="text-center mt-5">
        <p className="lead" style={{ fontSize: '1.2rem', color: '#555' }}>
          Ready to start your XBRL filing process or need assistance? Contact us today for expert guidance and seamless filing.
        </p>
        <Link to="/contactus" className="btn btn-primary btn-lg">
                Contact Us
                </Link>
      </div>
    </div>
  );
};

export default XbrlFiling;
