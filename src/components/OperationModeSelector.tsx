import React from 'react';
import { RefreshCw, Settings } from 'lucide-react';
import { OperationMode } from '../types';

interface OperationModeSelectorProps {
  mode: OperationMode;
  onModeChange: (mode: OperationMode) => void;
}

const OperationModeSelector: React.FC<OperationModeSelectorProps> = ({
  mode,
  onModeChange,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-lg font-bold text-slate-800 mb-4">Operation Mode</h3>
      <div className="space-y-2">
        <button
          onClick={() => onModeChange('auto')}
          className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
            mode === 'auto'
              ? 'bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-500'
              : 'bg-slate-50 border-slate-200 hover:border-blue-300'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <RefreshCw className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-slate-800">Auto Mode</span>
            </div>
            {mode === 'auto' && (
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            )}
          </div>
        </button>
        <button
          onClick={() => onModeChange('manual')}
          className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
            mode === 'manual'
              ? 'bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-500'
              : 'bg-slate-50 border-slate-200 hover:border-blue-300'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Settings className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-slate-800">Manual Mode</span>
            </div>
            {mode === 'manual' && (
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            )}
          </div>
        </button>
      </div>
    </div>
  );
};

export default OperationModeSelector;
