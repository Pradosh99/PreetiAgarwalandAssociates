import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

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
          <Link to="/company-formation" className="text-decoration-none">
            <div className="card shadow-lg border-light rounded p-2">
              <img 
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSxgqaBc6NPbJESqRYUn-uSRVnHHhVvTIGG_MxPiKgJ5D-_SFxy" 
                alt="Company Formation" 
                className="card-img-top" 
                style={{ height: '150px', objectFit: 'contain', marginTop: '15px'}} 
              />
              <div className="card-body">
                <h5 className="card-title text-center">Company Formation & LLP</h5>
                <p className="card-text text-center">
                  Helping you set up your business with full compliance and legal support.
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Service Card 2: FEMA and RBI Matters */}
        <div className="col">
          <Link to="/fema-rbi" className="text-decoration-none">
            <div className="card shadow-lg border-light rounded p-2">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9D1ErseFxw1-y8k2Ms-SrMvjfRyUfnb6x11tSUyx1RDksNxfrTIXvPcmUrn9axFMrTO4&usqp=CAU" 
                alt="FEMA and RBI" 
                className="card-img-top" 
                style={{ height: '150px', objectFit: 'contain', marginTop: '15px' }} 
              />
              <div className="card-body">
                <h5 className="card-title text-center">FEMA and RBI Matters</h5>
                <p className="card-text text-center">
                  Expert advisory services for compliance with FEMA and RBI regulations.
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Service Card 3: Compliance & Audit */}
        <div className="col">
          <Link to="/compliance-audit" className="text-decoration-none">
            <div className="card shadow-lg border-light rounded p-2">
              <img 
                src="https://static.wixstatic.com/media/ec2c1d_225c553e1b104ab6ab33e354373f7c31~mv2.png/v1/fill/w_216,h_154,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo%20(2).png" 
                alt="Compliance & Audit" 
                className="card-img-top" 
                style={{ height: '150px', objectFit: 'contain', marginTop: '15px' }} 
              />
              <div className="card-body">
                <h5 className="card-title text-center">Compliance & Audit</h5>
                <p className="card-text text-center">
                  Ensuring your company complies with Companies Act 2013 and other regulations.
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Service Card 4: Merger and De-merger */}
        <div className="col">
          <Link to="/merger-demergers" className="text-decoration-none">
            <div className="card shadow-lg border-light rounded p-2">
              <img 
                src="https://www.indiafilings.com/learn/wp-content/uploads/2018/03/Demerger.jpg" 
                alt="Merger and De-merger" 
                className="card-img-top" 
                style={{ height: '150px', objectFit: 'contain', marginTop: '15px' }} 
              />
              <div className="card-body">
                <h5 className="card-title text-center">Merger & De-merger</h5>
                <p className="card-text text-center">
                  Specialized services for smooth mergers and demergers with legal and regulatory support.
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Service Card 5: Agreements & Petitions */}
        <div className="col">
          <Link to="/agreements-petitions" className="text-decoration-none">
            <div className="card shadow-lg border-light rounded p-2">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/9501/9501126.png" 
                alt="Agreements & Petitions" 
                className="card-img-top" 
                style={{ height: '150px', objectFit: 'contain', marginTop: '15px' }} 
              />
              <div className="card-body">
                <h5 className="card-title text-center">Agreements & Petitions</h5>
                <p className="card-text text-center">
                  Legal drafting and consultation services for effective professional agreements and legal petitions.
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Service Card 6: Corporate Governance */}
        <div className="col">
          <Link to="/corporate-governance" className="text-decoration-none">
            <div className="card shadow-lg border-light rounded p-2">
              <img 
                src="https://cdn.iconscout.com/icon/free/png-256/free-corporate-governance-icon-download-in-svg-png-gif-file-formats--project-development-management-planning-teamwork-pack-business-icons-1836755.png" 
                alt="Corporate Governance" 
                className="card-img-top" 
                style={{ height: '150px', objectFit: 'contain', marginTop: '15px' }} 
              />
              <div className="card-body">
                <h5 className="card-title text-center">Corporate Governance</h5>
                <p className="card-text text-center">
                  Guiding you to enhance your corporate governance practices with compliance and efficiency.
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Service Card 7: Industrial Licensing */}
        <div className="col">
          <Link to="/industrial-licensing" className="text-decoration-none">
            <div className="card shadow-lg border-light rounded p-2">
              <img 
                src="https://kccbiolabs.com/wp-content/uploads/2023/08/complience005.png" 
                alt="Industrial Licensing" 
                className="card-img-top" 
                style={{ height: '150px', objectFit: 'contain', marginTop: '15px' }} 
              />
              <div className="card-body">
                <h5 className="card-title text-center">Industrial Licensing</h5>
                <p className="card-text text-center">
                  Helping your business obtain the necessary industrial licenses with full legal support.
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Service Card 8: XBRL Filing */}
        <div className="col">
          <Link to="/xbrl-filing" className="text-decoration-none">
            <div className="card shadow-lg border-light rounded p-2">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU_pKBiZ9MGLHrjJqZaqEi3vtsVz7JDGgR4g&s" 
                alt="XBRL Filing" 
                className="card-img-top" 
                style={{ height: '150px', objectFit: 'contain', marginTop: '15px' }} 
              />
              <div className="card-body">
                <h5 className="card-title text-center">XBRL Filing</h5>
                <p className="card-text text-center">
                  Offering expert assistance with XBRL filings to meet statutory requirements.
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Service Card 9: SEBI Matters and IPO */}
        <div className="col">
          <Link to="/sebi-ipo" className="text-decoration-none">
            <div className="card shadow-lg border-light rounded p-2">
              <img 
                src="https://www.livelaw.in/h-upload/2024/05/24/750x450_541364-sebi.webp" 
                alt="SEBI Matters and IPO" 
                className="card-img-top" 
                style={{ height: '150px', objectFit: 'contain', marginTop: '15px' }} 
              />
              <div className="card-body">
                <h5 className="card-title text-center">SEBI Matters and IPO</h5>
                <p className="card-text text-center">
                  Handling efficiently SEBI Matters and IPO procedures with smooth workflow.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
