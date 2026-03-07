import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-500">
      <header className="flex justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-800">Greenhouse Dashboard</h1>
          <p className="text-slate-500 mt-1">Real-time overview of all plant sensors.</p>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-lg font-medium">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            System Online
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { id: 1, name: 'Monstera Deliciosa', moisture: '65%', temp: '22°C', health: 'Excellent' },
          { id: 2, name: 'Ficus Lyrata', moisture: '45%', temp: '24°C', health: 'Good' },
          { id: 3, name: 'Calathea Ornata', moisture: '80%', temp: '21°C', health: 'Fair' },
          { id: 4, name: 'Strelitzia Nicolai', moisture: '55%', temp: '23°C', health: 'Excellent' },
        ].map((plant) => (
          <div key={plant.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow cursor-default group">
            <h3 className="text-lg font-semibold text-slate-800 mb-4 group-hover:text-green-600 transition-colors">{plant.name}</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500">Moisture</span>
                <span className="font-medium text-slate-800 bg-blue-50 text-blue-700 px-2 py-1 rounded-md">{plant.moisture}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500">Temperature</span>
                <span className="font-medium text-slate-800 bg-orange-50 text-orange-700 px-2 py-1 rounded-md">{plant.temp}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500">Health</span>
                <span className={`font-medium px-2 py-1 rounded-md ${plant.health === 'Excellent' ? 'bg-green-50 text-green-700' : plant.health === 'Good' ? 'bg-yellow-50 text-yellow-700' : 'bg-red-50 text-red-700'}`}>{plant.health}</span>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
               <span className="text-sm text-green-600 font-medium group-hover:underline">View specific plant config details manually via sidebar routing mapping to see useParams feature implementation.</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
