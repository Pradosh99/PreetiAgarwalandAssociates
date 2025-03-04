import React from 'react';

const Choose = () => {
  return (
    <div className="container py-5">
      {/* Page Title */}
      <div className="text-center mb-5">
        <h2 className="fw-bold" style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
          Why Choose Preeti K Agrawal & Associates?
        </h2>
        <p className="lead" style={{ fontSize: '1.1rem', color: '#555' }}>
          We are a leading firm offering comprehensive corporate compliance and secretarial services. Here's why our clients trust us:
        </p>
      </div>

      {/* Key Reasons Section */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {/* Reason 1: Expertise */}
        <div className="col">
          <div className="card shadow-lg border-light rounded p-4">
            
            <div className="card-body">
              <h5 className="card-title text-center" style={{ color: '#2c3e50' }}>Expertise in Corporate Law</h5>
              <p className="card-text text-center" style={{ color: '#555' }}>
                With years of experience in corporate law, we provide exceptional guidance on all corporate compliance and regulatory matters.
              </p>
            </div>
          </div>
        </div>

        {/* Reason 2: Comprehensive Services */}
        <div className="col">
          <div className="card shadow-lg border-light rounded p-4">
            
            <div className="card-body">
              <h5 className="card-title text-center" style={{ color: '#2c3e50' }}>Comprehensive Range of Services</h5>
              <p className="card-text text-center" style={{ color: '#555' }}>
                From company formation and mergers to compliance audits, we offer end-to-end solutions for all corporate needs.
              </p>
            </div>
          </div>
        </div>

        {/* Reason 3: Trusted Advisory */}
        <div className="col">
          <div className="card shadow-lg border-light rounded p-4">
            
            <div className="card-body">
              <h5 className="card-title text-center" style={{ color: '#2c3e50' }}>Trusted Advisory</h5>
              <p className="card-text text-center" style={{ color: '#555' }}>
                We are a trusted partner for businesses, offering strategic advice that aligns with legal, compliance, and financial goals.
              </p>
            </div>
          </div>
        </div>

        {/* Reason 4: Customer-Centric Approach */}
        <div className="col">
          <div className="card shadow-lg border-light rounded p-4">
            
            <div className="card-body">
              <h5 className="card-title text-center" style={{ color: '#2c3e50' }}>Customer-Centric Approach</h5>
              <p className="card-text text-center" style={{ color: '#555' }}>
                We prioritize our clients' needs, ensuring personalized and responsive services that are tailor-made for your business.
              </p>
            </div>
          </div>
        </div>

        {/* Reason 5: Transparency and Integrity */}
        <div className="col">
          <div className="card shadow-lg border-light rounded p-4">
            
            <div className="card-body">
              <h5 className="card-title text-center" style={{ color: '#2c3e50' }}>Transparency and Integrity</h5>
              <p className="card-text text-center" style={{ color: '#555' }}>
                Our firm believes in complete transparency and integrity, ensuring that our clients always have a clear understanding of the process.
              </p>
            </div>
          </div>
        </div>

        {/* Reason 6: Timely Service */}
        <div className="col">
          <div className="card shadow-lg border-light rounded p-4">
            
            <div className="card-body">
              <h5 className="card-title text-center" style={{ color: '#2c3e50' }}>Timely Service</h5>
              <p className="card-text text-center" style={{ color: '#555' }}>
                We ensure that all our services are delivered on time, meeting deadlines with precision and professionalism.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Conclusion Section */}
      <div className="text-center mt-5">
        <h3 className="fw-bold" style={{ color: '#2c3e50' }}>
          Choose Preeti K Agrawal & Associates for Trusted, Reliable, and Professional Corporate Compliance Services.
        </h3>
        <p style={{ fontSize: '1.1rem', color: '#555' }}>
          With our expertise, integrity, and customer-first approach, we ensure your business stays legally compliant and efficient.
        </p>
      </div>
    </div>
  );
};

export default Choose;
