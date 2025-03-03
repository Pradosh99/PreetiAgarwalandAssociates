import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Home from './components/home.jsx';
import Services from './components/services.jsx';
import Aboutus from './components/aboutus.jsx';
import Contactus from './components/contactus.jsx';
import Choose from './components/choose.jsx';
import Footer from './components/footer.jsx';

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
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
