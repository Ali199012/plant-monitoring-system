import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Leaf, Activity, Settings } from 'lucide-react';

const Sidebar = () => {
  return (
    <nav className="w-64 bg-green-900 min-h-screen p-6 text-white shadow-xl flex flex-col">
      <div className="flex items-center gap-3 mb-10">
        <Leaf className="w-8 h-8 text-green-400" />
        <h1 className="text-xl font-bold tracking-tight">Plant Monitor</h1>
      </div>

      <div className="flex flex-col gap-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
              isActive
                ? 'bg-green-700 font-semibold shadow-md translate-x-2'
                : 'hover:bg-green-800/50 hover:translate-x-1 text-green-100/70'
            }`
          }
        >
          <LayoutDashboard className="w-5 h-5" />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/plants/1"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
              isActive
                ? 'bg-green-700 font-semibold shadow-md translate-x-2'
                : 'hover:bg-green-800/50 hover:translate-x-1 text-green-100/70'
            }`
          }
        >
           <Leaf className="w-5 h-5" />
          <span>Plant Detail (ID: 1)</span>
        </NavLink>

        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
              isActive
                ? 'bg-green-700 font-semibold shadow-md translate-x-2'
                : 'hover:bg-green-800/50 hover:translate-x-1 text-green-100/70'
            }`
          }
        >
          <Activity className="w-5 h-5" />
          <span>Health History</span>
        </NavLink>

        <div className="mt-auto pt-10">
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                isActive
                  ? 'bg-green-700 font-semibold shadow-md translate-x-2'
                  : 'hover:bg-green-800/50 hover:translate-x-1 text-green-100/70'
              }`
            }
          >
            <Settings className="w-5 h-5" />
            <span>System Config</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
