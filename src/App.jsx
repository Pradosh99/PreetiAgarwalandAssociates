import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Home from './components/home.jsx';
import Services from './components/services.jsx';
import Aboutus from './components/aboutus.jsx';
import Contactus from './components/contactus.jsx';
import Choose from './components/choose.jsx';
import Footer from './components/footer.jsx';
import CompanyFormation from './components/CompanyFormation'; // Import the specific component for Company Formation
import FemaRbi from './components/FemaRbi'; // Import the specific component for FEMA and RBI
import ComplianceAudit from './components/ComplianceAudit'; // Import the specific component for Compliance & Audit
import MergerDemergers from './components/MergerDemergers'; // Import the specific component for Merger and Demerger
import AgreementsPetitions from './components/AgreementsPetitions'; // Import the specific component for Agreements & Petitions
import CorporateGovernance from './components/CorporateGovernance'; // Import the specific component for Corporate Governance
import IndustrialLicensing from './components/IndustrialLicensing'; // Import the specific component for Industrial Licensing
import XbrlFiling from './components/XbrlFiling'; // Import the specific component for XBRL Filing
import SebiIpo from './components/SebiIpo'; // Import the specific component for SEBI Matters and IPO

const App = () => {
  return (
    <Router>  {/* Move Router here to wrap the entire app */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/choose" element={<Choose />} />
        <Route path="/company-formation" element={<CompanyFormation />} />
        <Route path="/fema-rbi" element={<FemaRbi />} />
        <Route path="/compliance-audit" element={<ComplianceAudit />} />
        <Route path="/merger-demergers" element={<MergerDemergers />} />
        <Route path="/agreements-petitions" element={<AgreementsPetitions />} />
        <Route path="/corporate-governance" element={<CorporateGovernance />} />
        <Route path="/industrial-licensing" element={<IndustrialLicensing />} />
        <Route path="/xbrl-filing" element={<XbrlFiling />} />
        <Route path="/sebi-ipo" element={<SebiIpo />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
