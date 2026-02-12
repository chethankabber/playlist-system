import React from 'react';
import { Download, RefreshCw, Eye } from 'lucide-react';

const QuickActions: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl shadow-lg p-6">
      <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
      <div className="space-y-2">
        <button className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold text-sm hover:shadow-lg transition-all flex items-center justify-center gap-2">
          <Download className="w-4 h-4" />
          Push to All Displays
        </button>
        <button className="w-full px-4 py-3 bg-white/10 backdrop-blur text-white rounded-lg font-semibold text-sm hover:bg-white/20 transition-all flex items-center justify-center gap-2">
          <RefreshCw className="w-4 h-4" />
          Sync All Boards
        </button>
        <button className="w-full px-4 py-3 bg-white/10 backdrop-blur text-white rounded-lg font-semibold text-sm hover:bg-white/20 transition-all flex items-center justify-center gap-2">
          <Eye className="w-4 h-4" />
          Preview Mode
        </button>
      </div>
    </div>
  );
};

export default QuickActions;
