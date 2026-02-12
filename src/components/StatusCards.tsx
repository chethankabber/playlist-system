import React from 'react';
import { Play, Film, Monitor, RefreshCw } from 'lucide-react';

interface StatusCardsProps {
  activePlaylists: number;
  totalMediaFiles: number;
  displayBoards: { online: number; total: number };
  pendingSyncs: number;
}

const StatusCards: React.FC<StatusCardsProps> = ({
  activePlaylists,
  totalMediaFiles,
  displayBoards,
  pendingSyncs,
}) => {
  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      <div className="bg-white rounded-xl p-5 shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-all">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-slate-600">
            Active Playlists
          </span>
          <Play className="w-5 h-5 text-blue-500" />
        </div>
        <div className="text-3xl font-bold text-slate-800">{activePlaylists}</div>
        <div className="text-xs text-green-600 mt-1">↑ 1 from yesterday</div>
      </div>

      <div className="bg-white rounded-xl p-5 shadow-lg border-l-4 border-purple-500 hover:shadow-xl transition-all">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-slate-600">Media Files</span>
          <Film className="w-5 h-5 text-purple-500" />
        </div>
        <div className="text-3xl font-bold text-slate-800">{totalMediaFiles}</div>
        <div className="text-xs text-slate-500 mt-1">24 images, 23 videos</div>
      </div>

      <div className="bg-white rounded-xl p-5 shadow-lg border-l-4 border-cyan-500 hover:shadow-xl transition-all">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-slate-600">
            Display Boards
          </span>
          <Monitor className="w-5 h-5 text-cyan-500" />
        </div>
        <div className="text-3xl font-bold text-slate-800">
          {displayBoards.online}/{displayBoards.total}
        </div>
        <div className="text-xs text-green-600 mt-1">All operational</div>
      </div>

      <div className="bg-white rounded-xl p-5 shadow-lg border-l-4 border-amber-500 hover:shadow-xl transition-all">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-slate-600">
            Pending Syncs
          </span>
          <RefreshCw className="w-5 h-5 text-amber-500" />
        </div>
        <div className="text-3xl font-bold text-slate-800">{pendingSyncs}</div>
        <div className="text-xs text-amber-600 mt-1">AVDB-04 syncing</div>
      </div>
    </div>
  );
};

export default StatusCards;
