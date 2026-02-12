import React from 'react';
import { DisplayBoard } from '../types';

interface DisplayBoardStatusProps {
  boards: DisplayBoard[];
}

const DisplayBoardStatus: React.FC<DisplayBoardStatusProps> = ({ boards }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-lg font-bold text-slate-800 mb-4">Display Boards</h3>
      <div className="space-y-3">
        {boards.map((board) => (
          <div
            key={board.id}
            className="bg-slate-50 rounded-lg p-4 border border-slate-200 hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div
                  className={`w-3 h-3 rounded-full ${
                    board.status === 'online'
                      ? 'bg-green-500 animate-pulse'
                      : board.status === 'syncing'
                      ? 'bg-amber-500'
                      : 'bg-red-500'
                  }`}
                ></div>
                <span className="font-semibold text-slate-800 text-sm">
                  {board.id}
                </span>
              </div>
              <span
                className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  board.status === 'online'
                    ? 'bg-green-100 text-green-700'
                    : board.status === 'syncing'
                    ? 'bg-amber-100 text-amber-700'
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {board.status.toUpperCase()}
              </span>
            </div>
            <div className="text-xs text-slate-600 mb-2">{board.name}</div>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex-1 bg-slate-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${
                    board.health > 95
                      ? 'bg-green-500'
                      : board.health > 85
                      ? 'bg-amber-500'
                      : 'bg-red-500'
                  }`}
                  style={{ width: `${board.health}%` }}
                ></div>
              </div>
              <span className="text-xs font-semibold text-slate-600">
                {board.health}%
              </span>
            </div>
            <div className="text-xs text-slate-500">
              Playing:{' '}
              <span className="font-semibold text-blue-600">
                {board.playlist}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayBoardStatus;
