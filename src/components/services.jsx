import React from 'react';

const Services = () => {
  return (
    <div className="container py-5">
      {/* Page Title */}
      <div className="text-center mb-5">
        <h2 className="fw-bold" style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>Our Professional Services</h2>
        <p className="lead" style={{ fontSize: '1.1rem', color: '#555' }}>
          We offer a wide range of corporate and compliance services to ensure your business stays legally compliant and efficient.
        </p>
      </div>

      {/* Services Cards Section */}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {/* Service Card 1: Company Formation & LLP */}
        <div className="col">
          <div className="card shadow-lg border-light rounded">
            <img 
              src="https://via.placeholder.com/150" 
              alt="Company Formation" 
              className="card-img-top" 
              style={{ height: '150px', objectFit: 'contain' }} 
            />
            <div className="card-body">
              <h5 className="card-title text-center">Company Formation & LLP</h5>
              <p className="card-text text-center">
                Helping you set up your business with full compliance and legal support.
              </p>
            </div>
          </div>
        </div>

        {/* Service Card 2: FEMA and RBI Matters */}
        <div className="col">
          <div className="card shadow-lg border-light rounded">
            <img 
              src="https://via.placeholder.com/150" 
              alt="FEMA and RBI" 
              className="card-img-top" 
              style={{ height: '150px', objectFit: 'contain' }} 
            />
            <div className="card-body">
              <h5 className="card-title text-center">FEMA and RBI Matters</h5>
              <p className="card-text text-center">
                Expert advisory services for compliance with FEMA and RBI regulations.
              </p>
            </div>
          </div>
        </div>

        {/* Service Card 3: Compliance & Audit */}
        <div className="col">
          <div className="card shadow-lg border-light rounded">
            <img 
              src="https://via.placeholder.com/150" 
              alt="Compliance & Audit" 
              className="card-img-top" 
              style={{ height: '150px', objectFit: 'contain' }} 
            />
            <div className="card-body">
              <h5 className="card-title text-center">Compliance & Audit</h5>
              <p className="card-text text-center">
                Ensuring your company complies with Companies Act 2013 and other regulations.
              </p>
            </div>
          </div>
        </div>

        {/* Service Card 4: Merger and De-merger */}
        <div className="col">
          <div className="card shadow-lg border-light rounded">
            <img 
              src="https://via.placeholder.com/150" 
              alt="Merger and De-merger" 
              className="card-img-top" 
              style={{ height: '150px', objectFit: 'contain' }} 
            />
            <div className="card-body">
              <h5 className="card-title text-center">Merger & De-merger</h5>
              <p className="card-text text-center">
                Specialized services for smooth mergers and demergers with legal and regulatory support.
              </p>
            </div>
          </div>
        </div>

        {/* Service Card 5: Agreements & Petitions */}
        <div className="col">
          <div className="card shadow-lg border-light rounded">
            <img 
              src="https://via.placeholder.com/150" 
              alt="Agreements & Petitions" 
              className="card-img-top" 
              style={{ height: '150px', objectFit: 'contain' }} 
            />
            <div className="card-body">
              <h5 className="card-title text-center">Agreements & Petitions</h5>
              <p className="card-text text-center">
                Legal drafting and consultation services for agreements and petitions.
              </p>
            </div>
          </div>
        </div>

        {/* Service Card 6: Corporate Governance */}
        <div className="col">
          <div className="card shadow-lg border-light rounded">
            <img 
              src="https://via.placeholder.com/150" 
              alt="Corporate Governance" 
              className="card-img-top" 
              style={{ height: '150px', objectFit: 'contain' }} 
            />
            <div className="card-body">
              <h5 className="card-title text-center">Corporate Governance</h5>
              <p className="card-text text-center">
                Guiding you to enhance your corporate governance practices with compliance and efficiency.
              </p>
            </div>
          </div>
        </div>

        {/* Service Card 7: Industrial Licensing */}
        <div className="col">
          <div className="card shadow-lg border-light rounded">
            <img 
              src="https://via.placeholder.com/150" 
              alt="Industrial Licensing" 
              className="card-img-top" 
              style={{ height: '150px', objectFit: 'contain' }} 
            />
            <div className="card-body">
              <h5 className="card-title text-center">Industrial Licensing</h5>
              <p className="card-text text-center">
                Helping your business obtain the necessary industrial licenses with full legal support.
              </p>
            </div>
          </div>
        </div>

        {/* Service Card 8: XBRL Filing */}
        <div className="col">
          <div className="card shadow-lg border-light rounded">
            <img 
              src="https://via.placeholder.com/150" 
              alt="XBRL Filing" 
              className="card-img-top" 
              style={{ height: '150px', objectFit: 'contain' }} 
            />
            <div className="card-body">
              <h5 className="card-title text-center">XBRL Filing</h5>
              <p className="card-text text-center">
                Offering expert assistance with XBRL filings to meet statutory requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
