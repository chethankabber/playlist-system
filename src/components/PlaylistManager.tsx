import React from 'react';
import { Play, Pause, Eye, Edit, Copy, Download, Plus } from 'lucide-react';
import { Playlist } from '../types';

interface PlaylistManagerProps {
  playlists: Playlist[];
  selectedPlaylist: number | null;
  onSelectPlaylist: (id: number) => void;
}

const PlaylistManager: React.FC<PlaylistManagerProps> = ({
  playlists,
  selectedPlaylist,
  onSelectPlaylist,
}) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-slate-800">Manage Playlists</h3>
        <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold text-sm hover:shadow-lg transition-all flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Create Playlist
        </button>
      </div>

      <div className="space-y-3">
        {playlists.map((playlist) => (
          <div
            key={playlist.id}
            onClick={() => onSelectPlaylist(playlist.id)}
            className={`group bg-slate-50 rounded-lg p-5 border-2 transition-all cursor-pointer ${
              selectedPlaylist === playlist.id
                ? 'border-blue-500 bg-blue-50 shadow-md'
                : 'border-slate-200 hover:border-blue-300 hover:shadow-md'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    playlist.status === 'active'
                      ? 'bg-green-100'
                      : 'bg-slate-200'
                  }`}
                >
                  {playlist.status === 'active' ? (
                    <Play className="w-5 h-5 text-green-600" />
                  ) : (
                    <Pause className="w-5 h-5 text-slate-600" />
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">{playlist.name}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                        playlist.status === 'active'
                          ? 'bg-green-100 text-green-700'
                          : playlist.status === 'scheduled'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-slate-200 text-slate-600'
                      }`}
                    >
                      {playlist.status.toUpperCase()}
                    </span>
                    <span className="text-xs text-slate-500">
                      Playing on: {playlist.boards.join(', ')}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-slate-700">
                  {playlist.items} items
                </div>
                <div className="text-xs text-slate-500">
                  Duration: {playlist.duration}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-4 pt-3 border-t border-slate-200">
              <button className="px-3 py-1.5 bg-blue-500 text-white rounded-lg text-xs font-semibold hover:bg-blue-600 transition-colors flex items-center gap-1">
                <Eye className="w-3 h-3" />
                Preview
              </button>
              <button className="px-3 py-1.5 bg-slate-600 text-white rounded-lg text-xs font-semibold hover:bg-slate-700 transition-colors flex items-center gap-1">
                <Edit className="w-3 h-3" />
                Edit
              </button>
              <button className="px-3 py-1.5 bg-purple-500 text-white rounded-lg text-xs font-semibold hover:bg-purple-600 transition-colors flex items-center gap-1">
                <Copy className="w-3 h-3" />
                Duplicate
              </button>
              <button className="px-3 py-1.5 bg-cyan-500 text-white rounded-lg text-xs font-semibold hover:bg-cyan-600 transition-colors flex items-center gap-1">
                <Download className="w-3 h-3" />
                Push to Displays
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaylistManager;
