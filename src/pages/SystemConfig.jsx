import React from 'react';
import { Settings, Bell, Database, Shield } from 'lucide-react';

const SystemConfig = () => {
  return (
    <div className="p-8 space-y-8 animate-in slide-in-from-top-4 duration-500">
      <header className="flex items-center gap-4 bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
         <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center">
            <Settings className="w-8 h-8 text-slate-700 animate-spin-slow" style={{ animationDuration: '4s' }} />
         </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-800">System Configuration</h1>
          <p className="text-slate-500 mt-1 text-lg">Threshold adjustments &amp; system parameters.</p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Settings Group 1 */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-8">
           <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2 border-b border-slate-100 pb-4">
               <Bell className="w-5 h-5 text-indigo-500" />
               Alert Thresholds
           </h2>
           <div className="space-y-6">
              <div className="space-y-2">
                 <label className="flex justify-between text-sm font-medium text-slate-700">
                    <span>Critical Moisture Alert</span>
                    <span className="text-indigo-600">&lt; 30%</span>
                 </label>
                 <input type="range" className="w-full accent-indigo-600" min="0" max="100" defaultValue="30" />
              </div>
              <div className="space-y-2">
                 <label className="flex justify-between text-sm font-medium text-slate-700">
                    <span>High Temperature Warning</span>
                    <span className="text-orange-600">&gt; 35°C</span>
                 </label>
                 <input type="range" className="w-full accent-orange-500" min="0" max="50" defaultValue="35" />
              </div>
           </div>
           
           <button className="w-full py-3 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200">
             Save Alert Configuration
           </button>
        </div>

        {/* Settings Group 2 */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-8">
             <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2 border-b border-slate-100 pb-4">
                 <Database className="w-5 h-5 text-emerald-500" />
                 Data Synchronization
             </h2>
             
             <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                   <div>
                       <div className="font-bold text-slate-800">Auto-Sync</div>
                       <div className="text-sm text-slate-500">Sync data every 5 minutes</div>
                   </div>
                   <div className="w-12 h-6 bg-emerald-500 rounded-full relative cursor-pointer">
                       <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                   </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                   <div>
                       <div className="font-bold text-slate-800">Data Retention</div>
                       <div className="text-sm text-slate-500">Keep history for 90 days</div>
                   </div>
                    <select className="bg-white border border-slate-200 text-slate-700 rounded-lg p-2 text-sm font-medium outline-none focus:border-emerald-500 cursor-pointer">
                      <option>30 Days</option>
                      <option selected>90 Days</option>
                      <option>1 Year</option>
                    </select>
                </div>
             </div>

             <div className="flex items-center gap-3 p-4 bg-indigo-50 text-indigo-800 rounded-xl border border-indigo-100">
                <Shield className="w-5 h-5 flex-shrink-0" />
                <p className="text-sm font-medium">System configuration is currently enforcing strong access control policies.</p>
             </div>
        </div>
      </div>
    </div>
  );
};

export default SystemConfig;
