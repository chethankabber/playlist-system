import React from 'react';
import { Monitor } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <div className="bg-slate-800 border-b-4 border-cyan-500 shadow-xl">
      <div className="max-w-[1600px] mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <Monitor className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">
                Video Display
              </h1>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-400 rounded-lg">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-green-300">
              ONLINE
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
