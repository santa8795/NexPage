import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages import kar rahe hain
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import ContactUs from './pages/ContactUs';
import Showcase from './pages/Showcase';
import TermsAndConditions from './components/TermsAndConditions';
import Privacy from './components/Privacy';
import ViewTemplet from './components/ViewTemplet';

// Route change hone par title update karne ke liye component
function DynamicTitle() {
  const location = useLocation();

  useEffect(() => {
    // Route ke hisaab se title set karein
    switch (location.pathname) {
      case '/':
        document.title = 'Home - Legispro Advisors';
        break;
      case '/about':
        document.title = 'About Us - Legispro Advisors';
        break;
      case '/services':
        document.title = 'Services - Legispro Advisors';
        break;
      case '/pricing':
        document.title = 'Pricing - Legispro Advisors';
        break;
      case '/contact':
        document.title = 'Contact Us - Legispro Advisors';
        break;
      case '/showcase':
        document.title = 'Showcase - Legispro Advisors';
        break;
      case '/terms':
        document.title = 'Terms & Conditions - Legispro Advisors';
        break;
      case '/privacy':
        document.title = 'Privacy Policy - Legispro Advisors';
        break;
      case '/templates':
        document.title = 'Templates - Legispro Advisors';
        break;
      default:
        document.title = 'Legispro Advisors';
    }
  }, [location]);

  return null; // Ye UI me kuch render nahi karega
}

function App() {
  return (
    <Router>
      {/* Dynamic Title Component ko yahan call karein */}
      <DynamicTitle />

      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/showcase" element={<Showcase />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/templates" element={<ViewTemplet />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;