import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BackpackingTrips } from './pages/BackpackingTrips';
import { WeekendGetaways } from './pages/WeekendGetaways';
import { SoloTravels } from './pages/SoloTravels';
import { AdventureTreks } from './pages/AdventureTreks';
import { HoneymoonTrips } from './pages/HoneymoonTrips';
import { CorporateTrips } from './pages/CorporateTrips';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import {
  Kashmir,
  JibhiTrithan,
  Manali,
  Kasol,
  Sissu,
  ChoptaTungnath
} from './pages/destinations';
import { ScrollToTop } from './components/ScrollToTop';
import { PrivacyPolicy } from './pages/PrivacyPolicy';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/backpacking" element={<BackpackingTrips />} />
        <Route path="/weekend-getaways" element={<WeekendGetaways />} />
        <Route path="/solo-travels" element={<SoloTravels />} />
        <Route path="/adventure-treks" element={<AdventureTreks />} />
        <Route path="/honeymoon" element={<HoneymoonTrips />} />
        <Route path="/corporate" element={<CorporateTrips />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Destination Routes */}
        <Route path="/destinations/kashmir" element={<Kashmir />} />
        <Route path="/destinations/jibhi-trithan" element={<JibhiTrithan />} />
        <Route path="/destinations/manali" element={<Manali />} />
        <Route path="/destinations/kasol" element={<Kasol />} />
        <Route path="/destinations/sissu" element={<Sissu />} />
        <Route path="/destinations/chopta-tungnath" element={<ChoptaTungnath />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;