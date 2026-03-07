import React from 'react';
import { Activity, TrendingUp, BarChart3, AlertTriangle } from 'lucide-react';

const HealthHistory = () => {
  return (
    <div className="p-8 space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <header className="flex justify-between items-center bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-800 flex items-center gap-3">
            <Activity className="w-8 h-8 text-blue-500" />
            Health History & Analytics
          </h1>
          <p className="text-slate-500 mt-2 text-lg">Historical trends and growth patterns visualization view.</p>
        </div>
        <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-xl font-medium tracking-wide">Last 30 Days</div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-slate-100 min-h-[400px] flex flex-col">
          <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-indigo-500" />
            Growth Patterns
          </h2>
          <div className="flex-1 border-2 border-dashed border-slate-100 rounded-2xl flex items-center justify-center bg-slate-50 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="text-slate-400 font-medium z-10">Interactive Chart Placeholder</span>
          </div>
        </div>

        <div className="space-y-8">
             <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
               <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                 <AlertTriangle className="w-5 h-5 text-amber-500" />
                 Recent Alerts
               </h2>
               <div className="space-y-4">
                 <div className="p-4 bg-red-50 text-red-700 rounded-xl border border-red-100 text-sm font-medium">Critical moisture drop (Monstera) - 2 days ago</div>
                 <div className="p-4 bg-amber-50 text-amber-700 rounded-xl border border-amber-100 text-sm font-medium">High temperature (Ficus) - 5 days ago</div>
               </div>
             </div>

             <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-emerald-500" />
                  Overall Stats
                </h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1 font-medium text-slate-600">
                      <span>Average Moisture</span>
                      <span>61%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full w-[61%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1 font-medium text-slate-600">
                      <span>System Health</span>
                      <span>94%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div className="bg-emerald-500 h-2 rounded-full w-[94%]"></div>
                    </div>
                  </div>
                </div>
             </div>
        </div>
      </div>
    </div>
  );
};

export default HealthHistory;
