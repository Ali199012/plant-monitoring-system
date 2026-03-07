import React from 'react';

const PlantCollection = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-20 animate-in fade-in duration-500">
       <div className="bg-[#EBF8E5] rounded-[40px] p-12 lg:p-24 flex flex-col items-center text-center">
         <h1 className="text-4xl md:text-5xl font-bold text-[#222] mb-6">Our Full Plant Collection</h1>
         <p className="text-gray-600 text-lg max-w-2xl leading-relaxed mb-10">
            Browse our extensive catalog of indoor, outdoor, exotic, and foundational plants to build your perfect mini ecosystem. We currently have over 200 species available for delivery.
         </p>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl opacity-75 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Visual placeholders for a grid */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="aspect-square bg-white rounded-2xl shadow-sm flex items-center justify-center border border-gray-100 p-4">
                    <div className="w-full h-full bg-[#EBF8E5]/50 rounded-xl"></div>
                </div>
            ))}
         </div>
       </div>
    </div>
  );
};

export default PlantCollection;
