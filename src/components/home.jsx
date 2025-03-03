import React from 'react'
import './home.css'

export default function Home() {
  return (
    <>
      <div className="homepage" >
        <h1 style={{ fontSize: '45px', fontWeight: 'bolder', fontFamily: 'sans-serif', textAlign: 'center' }}>Empowering Your Business with Expert Company Secretarial Services</h1>
        <p style={{ textAlign: 'center', marginLeft: '125px', marginRight: '125px', fontWeight: 'bold' }}>At Preeti K Agrawal & Associates, we simplify corporate governance and compliance,
          allowing you to focus on growing your business. Our team of certified professionals
          provides personalized solutions tailored to your needs, ensuring your company stays
          on track with legal regulations and corporate best practices. Trust us to handle the
          complexities while you focus on what matters most.</p>
      </div><div className='container py-5 bg-light mt-5'>
  <h2 className='text-center mt-2 fw-bold' style={{ fontFamily: 'sans-serif' }}>Our Mission and Vision</h2>
  <div className="d-flex justify-content-center align-items-center row">
    <div className="card col-md-4 mx-3 my-3" style={{ width: '16rem', borderRadius: '15px', backgroundColor: 'lightgrey', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <img src="https://cdn-icons-png.flaticon.com/512/4440/4440484.png" className="card-img-top" style={{ height: '100px', width: '100px', marginTop: '20px', marginBottom: '15px', margin: 'auto' }} />
      <div className="card-body">
        <h5 className="card-title text-center">To work with professional harmony and transparency approach</h5>
      </div>
    </div>
    <div className="card col-md-4 mx-3 my-3" style={{ width: '16rem', borderRadius: '15px', backgroundColor: 'lightgrey', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <img src="https://cdn-icons-png.flaticon.com/512/913/913388.png" className="card-img-top" style={{ height: '100px', width: '100px', marginTop: '20px', marginBottom: '15px', margin: 'auto' }} />
      <div className="card-body">
        <h5 className="card-title text-center">To achieve client satisfaction through professional delivery of services.</h5>
      </div>
    </div>
    <div className="card col-md-4 mx-3 my-3" style={{ width: '16rem', borderRadius: '15px', backgroundColor: 'lightgrey', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <img src="https://cdn-icons-png.flaticon.com/512/995/995320.png" className="card-img-top" style={{ height: '100px', width: '100px', marginTop: '20px', marginBottom: '15px', margin: 'auto' }} />
      <div className="card-body">
        <h5 className="card-title text-center">To add value to client operations by providing quality and timely services.</h5>
      </div>
    </div>
    <div className="card col-md-4 mx-3 my-3" style={{ width: '16rem', borderRadius: '15px', backgroundColor: 'lightgrey', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <img src="https://cdn-icons-png.flaticon.com/512/4371/4371417.png" className="card-img-top" style={{ height: '100px', width: '100px', marginTop: '20px', marginBottom: '15px', margin: 'auto' }} />
      <div className="card-body">
        <h5 className="card-title text-center">To gain client’s confidence, satisfaction and faith through integrity and efficiency.</h5>
      </div>
    </div>
    <div className="card col-md-4 mx-3 my-3" style={{ width: '16rem', borderRadius: '15px', backgroundColor: 'lightgrey', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <img src="https://cdn-icons-png.flaticon.com/512/2600/2600372.png" className="card-img-top" style={{ height: '100px', width: '100px', marginTop: '20px', marginBottom: '15px', margin: 'auto' }} />
      <div className="card-body">
        <h5 className="card-title text-center">To emerge as a strong backbone for our clients with our passionate workflow and strategies.</h5>
      </div>
    </div>
  </div>
</div>
<div className="container py-5 mt-3">
  <div className="row align-items-center rounded p-4" >
    <div className="col-md-6 mb-4 mb-md-0">
      <img
        src="https://media.istockphoto.com/id/1135581630/photo/administrator-business-man-financial-inspector-and-secretary-making-report-calculating.webp?a=1&b=1&s=612x612&w=0&k=20&c=GyfoGKIpexJN0C-vMOskmzj4VkNtILoPKzvI1yyLP7o="
        alt="Company Secretary"
        className='animated-image'
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '15px',
          boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
        }}
      />
    </div>
    <div className="col-md-6">
      <h3 className="fw-bold mb-3" style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
        Requirement of Efficient Company Secretary Practices
      </h3>
      <p
        style={{
          fontSize: '1rem',
          lineHeight: '1.6',
          color: '#555',
          fontFamily: 'Arial, sans-serif',
          textAlign: 'justify',
        }}
      >
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
  )
}
