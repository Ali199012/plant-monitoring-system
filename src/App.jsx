import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PlantCollection from './pages/PlantCollection';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white font-sans text-[#1F2937]">
        <Navbar />
        <main className="w-full">
           <Routes>
              <Route path="/" element={<Home />} />
              {/* Secondary Routes */}
              <Route path="/collection" element={<PlantCollection />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
           </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
