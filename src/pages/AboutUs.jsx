import React from 'react';

const AboutUs = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-20 animate-in fade-in duration-500">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="bg-gray-100 rounded-[40px] aspect-square w-full max-w-md mx-auto flex items-center justify-center p-8 overflow-hidden relative">
             <div className="absolute inset-0 bg-[#EBF8E5] opacity-50"></div>
             <img src="/hero_plant_rubber.png" alt="Our Team" className="w-full object-contain relative z-10 mix-blend-multiply opacity-80" />
          </div>
          <div>
              <span className="text-[#5AB23A] font-bold tracking-wider uppercase text-sm mb-4 block">Our Story</span>
              <h1 className="text-4xl md:text-5xl font-bold text-[#222] mb-6 leading-tight">Bringing Nature Back Indoors</h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We believe that everyone deserves a touch of green in their life regardless of space constraints or previous gardening experience.
                Our mission is to provide high-quality, beautiful, and easy-to-care-for plants that act as foundational pieces for your own unique mini-ecosystem.
              </p>
              <div className="flex gap-12">
                 <div>
                    <h3 className="text-3xl font-bold text-[#222]">5k+</h3>
                    <p className="text-sm text-gray-500 uppercase font-semibold mt-1">Happy Customers</p>
                 </div>
                 <div>
                    <h3 className="text-3xl font-bold text-[#222]">200+</h3>
                    <p className="text-sm text-gray-500 uppercase font-semibold mt-1">Plant Species</p>
                 </div>
              </div>
          </div>
       </div>
    </div>
  );
};

export default AboutUs;
