import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const PlantDetail = () => {
  // Grab dynamic info (like IDs) out of the URL
  const { id } = useParams();
  
  // A function to change pages via code (logic-based)
  const navigate = useNavigate();

  // In a real app, you would fetch data based on the 'id'
  const plantData = {
    1: { name: 'Monstera Deliciosa', type: 'Tropical', watering: 'Weekly', light: 'Bright Indirect', humidity: 'High', lastWatered: '2 days ago' },
    2: { name: 'Ficus Lyrata', type: 'Broadleaf', watering: 'Bi-weekly', light: 'Full Sun', humidity: 'Moderate', lastWatered: '1 week ago' }
  };

  const plant = plantData[id] || { name: 'Unknown Plant', type: 'N/A', watering: 'N/A', light: 'N/A', humidity: 'N/A', lastWatered: 'N/A' };

  return (
    <div className="p-8 space-y-8 animate-in slide-in-from-right-4 duration-500">
      <header className="flex flex-col gap-4 bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-3xl -mr-20 -mt-20 opacity-50 pointer-events-none"></div>
        <button 
          onClick={() => navigate('/')}
          className="self-start text-sm text-slate-500 hover:text-green-600 transition-colors flex items-center gap-1 font-medium bg-slate-50 px-3 py-1.5 rounded-lg"
        >
          ← Back to Dashboard via useNavigate
        </button>
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Plant ID: {id}</span>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Active Monitoring</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-800">{plant.name}</h1>
          <p className="text-slate-500 text-lg mt-2">Specific data &amp; graphs for an individual plant view using useParams().</p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
           <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">Metadata</h2>
           <ul className="space-y-4">
               <li className="flex justify-between items-center p-4 bg-slate-50 rounded-xl">
                   <span className="text-slate-500 font-medium">Type</span>
                   <span className="text-slate-800 font-bold">{plant.type}</span>
               </li>
               <li className="flex justify-between items-center p-4 bg-slate-50 rounded-xl">
                   <span className="text-slate-500 font-medium">Ideal Watering</span>
                   <span className="text-blue-700 font-bold">{plant.watering}</span>
               </li>
               <li className="flex justify-between items-center p-4 bg-slate-50 rounded-xl">
                   <span className="text-slate-500 font-medium">Light Requirements</span>
                   <span className="text-amber-600 font-bold">{plant.light}</span>
               </li>
           </ul>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-center items-center text-center min-h-[300px]">
           <div className="w-32 h-32 rounded-full border-8 border-green-50 flex items-center justify-center mb-6">
              <div className="text-4xl">🪴</div>
           </div>
           <h3 className="text-xl font-bold text-slate-800">Dynamic UI Rendered</h3>
           <p className="text-slate-500 mt-2 max-w-xs">This view is dynamically generated using the React Router <strong>useParams</strong> hook extracted from <em>/plants/{id}</em>.</p>
        </div>
      </div>
    </div>
  );
};

export default PlantDetail;
