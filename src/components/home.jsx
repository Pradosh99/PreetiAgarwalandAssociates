import React from 'react';
import './home.css';

export default function Home() {
  return (
    <>
      <div className="homepage">
        <h1 className="homepage-heading" style={{color: 'white'}}>
          Empowering Your Business with Expert Company Secretarial Services
        </h1>
        <p className="homepage-paragraph" style={{color: 'white'}}>
          At Preeti K Agrawal & Associates, we simplify corporate governance and compliance,
          allowing you to focus on growing your business. Our team of certified professionals
          provides personalized solutions tailored to your needs, ensuring your company stays
          on track with legal regulations and corporate best practices. Trust us to handle the
          complexities while you focus on what matters most.
        </p>
      </div>

      {/* Mission and Vision Section */}
      <div className="container bg-light mt-5 p-5">
  <h2 className="text-center mt-2 fw-bold mission-heading">Our Mission and Vision</h2>
  <div className="row justify-content-center align-items-center">
    {['4440/4440484.png', '913/913388.png', '995/995320.png', '4371/4371417.png', '2600/2600372.png'].map((src, idx) => (
      <div key={idx} className="col-md-4 col-sm-6 mb-4 d-flex justify-content-center">
        <div className="card mx-3 my-3 service-card">
          <img
            src={`https://cdn-icons-png.flaticon.com/512/${src}`}
            alt="icon"
            className="card-img-top service-icon"
          />
          <div className="card-body">
            <h5 className="card-title text-center">
              {[
                'To work with professional harmony and transparency approach',
                'To achieve client satisfaction through professional delivery of services.',
                'To add value to client operations by providing quality and timely services.',
                'To gain client’s confidence, satisfaction and faith through integrity and efficiency.',
                'To emerge as a strong backbone for our clients with our passionate workflow and strategies.',
              ][idx]}
            </h5>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


      {/* Requirement of Efficient Company Secretary Practices */}
      <div className="container py-5 mt-3">
        <div className="row align-items-center rounded p-4">
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="https://media.istockphoto.com/id/1135581630/photo/administrator-business-man-financial-inspector-and-secretary-making-report-calculating.webp?a=1&b=1&s=612x612&w=0&k=20&c=GyfoGKIpexJN0C-vMOskmzj4VkNtILoPKzvI1yyLP7o="
              alt="Company Secretary"
              className="company-img animated-image"
            />
          </div>
          <div className="col-md-6">
            <h3 className="fw-bold mb-3 vision-heading">
              Requirement of Efficient Company Secretary Practices
            </h3>
            <p className="vision-paragraph">
              An efficient Company Secretary (CS) plays a pivotal role in the smooth functioning of any organization.
              With corporate governance and compliance standards becoming increasingly complex, a company needs an
              adept CS to ensure adherence to all legal and regulatory requirements. The CS oversees corporate records,
              conducts board meetings, prepares minutes, and ensures compliance with statutory obligations. A well-practiced
              CS brings clarity, reduces legal risks, and enhances organizational integrity, making them an invaluable asset
              for any company aiming for sustainable success.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
