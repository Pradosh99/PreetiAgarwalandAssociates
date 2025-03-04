import React from 'react';
import { Link } from 'react-router-dom';

const CompanyFormation = () => {
  return (
    <div className="container py-5">
      {/* Page Title with Image */}
      <div className="text-center mb-5">
        <img 
          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSxgqaBc6NPbJESqRYUn-uSRVnHHhVvTIGG_MxPiKgJ5D-_SFxy" 
          alt="Company Formation" 
          className="img-fluid mb-4 rounded"
          style={{ maxHeight: '300px', objectFit: 'cover' }}
        />
        <h2 className="fw-bold" style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
          Company Formation Services
        </h2>
        <p className="lead" style={{ fontSize: '1.1rem', color: '#555' }}>
          We specialize in providing a range of company formation services to help you establish your business with legal compliance.
        </p>
      </div>

      {/* Service Information */}
      <div className='bg-white p-5 '>
        <h3 className="fw-bold mb-4" style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
          Types of Company Formation Services We Offer:
        </h3>
        
        {/* Service Point 1: Private / Public Companies */}
        <div className="mb-5">
          <h4 className="fw-bold">Private / Public Companies</h4>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            We assist you in setting up both private and public companies, ensuring that all statutory requirements and compliance regulations are met. Whether you are starting a private business or planning a public offering, we ensure your company is formed with legal integrity and clarity.
          </p>
        </div>

        {/* Service Point 2: Registration of Start-up */}
        <div className="mb-5">
          <h4 className="fw-bold">Registration of Start-up</h4>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            Our experts guide you through the process of registering a start-up, from documentation to legal compliance, ensuring a smooth start for your business. Start-ups have access to several benefits, and we help you take advantage of every opportunity.
          </p>
        </div>

        {/* Service Point 3: Wholly Owned Subsidiaries */}
        <div className="mb-5">
          <h4 className="fw-bold">Wholly Owned Subsidiaries</h4>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            We help you set up wholly owned subsidiaries, offering strategic guidance and ensuring compliance with local regulations. This structure allows businesses to expand into new markets or diversify their operations while maintaining complete control.
          </p>
        </div>

        {/* Service Point 4: Joint Venture Companies */}
        <div className="mb-5">
          <h4 className="fw-bold">Joint Venture Companies</h4>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            Our team provides expert assistance for setting up joint venture companies, where two or more entities come together to pool resources for a common business goal. We ensure legal frameworks are in place for a transparent and successful partnership.
          </p>
        </div>

        {/* Service Point 5: Section 8 (Not for Profit) Companies */}
        <div className="mb-5">
          <h4 className="fw-bold">Section 8 (Not for Profit) Companies</h4>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            Section 8 companies are non-profit organizations that focus on promoting social welfare, education, and other charitable objectives. We provide legal services to help you establish and register a Section 8 company, ensuring compliance with the Companies Act.
          </p>
        </div>

        {/* Service Point 6: Producer Companies */}
        <div className="mb-5">
          <h4 className="fw-bold">Producer Companies</h4>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            We assist in setting up Producer Companies which are established to support the needs and interests of agricultural producers. These companies help in pooling resources, marketing, and providing value-added services to their members.
          </p>
        </div>

        {/* Service Point 7: One Person Companies (OPCs) */}
        <div className="mb-5">
          <h4 className="fw-bold">One Person Companies (OPCs)</h4>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            One Person Company (OPC) offers a simple and unique business structure for single entrepreneurs. We help individuals set up OPCs with minimal formalities while ensuring full legal protection and operational ease.
          </p>
        </div>

        {/* Service Point 8: Branch / Project / Liaison Offices */}
        <div className="mb-5">
          <h4 className="fw-bold">Branch / Project / Liaison Offices</h4>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            For companies wishing to expand their presence in India, we assist with setting up branch, project, and liaison offices. We ensure the establishment is fully compliant with Indian laws and offer guidance for effective operations.
          </p>
        </div>

        {/* Service Point 9: Partnership Firms */}
        <div className="mb-5">
          <h4 className="fw-bold">Partnership Firms</h4>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            We provide services to establish partnership firms, a popular structure for businesses looking for flexibility and ease in operations. Our team will help you draft agreements, set up the firm, and ensure compliance with legal requirements.
          </p>
        </div>

        {/* Service Point 10: Limited Liability Partnerships */}
        <div>
          <h4 className="fw-bold">Limited Liability Partnerships (LLPs)</h4>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            LLPs combine the flexibility of a partnership with the benefits of limited liability. We guide you through every step of establishing an LLP, from drafting partnership deeds to registration and ensuring compliance with the law.
          </p>
        </div>
      </div>

      {/* Contact Button Section */}
      <div className="text-center mt-5">
        <p className="lead" style={{ fontSize: '1.2rem', color: '#555' }}>
          Ready to form your company? Contact us today to get started!
        </p>
        <Link to="/contactus" className="btn btn-primary btn-lg">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default CompanyFormation;
