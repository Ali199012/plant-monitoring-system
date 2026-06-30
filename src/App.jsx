import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import PlantDetail from './pages/PlantDetail';
import HealthHistory from './pages/HealthHistory';
import SystemConfig from './pages/SystemConfig';
import PlantCollection from './pages/PlantCollection';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 font-sans text-[#1F2937] flex">
        <Sidebar />
        <main className="flex-1 w-full">
           <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/plants/:id" element={<PlantDetail />} />
              <Route path="/analytics" element={<HealthHistory />} />
              <Route path="/settings" element={<SystemConfig />} />
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
