import React from 'react';
import { Calendar, Clock, Settings, Plus } from 'lucide-react';

const ScheduleView: React.FC = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-slate-800">Display Scheduling</h3>
        <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold text-sm hover:shadow-lg transition-all flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Schedule
        </button>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-8 border border-blue-200">
        <div className="text-center">
          <Calendar className="w-16 h-16 text-blue-400 mx-auto mb-4" />
          <h4 className="text-lg font-bold text-slate-700 mb-2">
            Schedule Management
          </h4>
          <p className="text-sm text-slate-600 mb-4">
            Configure time-based playlist schedules for automated display board
            content rotation
          </p>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-white rounded-lg p-4 border border-slate-200">
              <Clock className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <div className="text-xs font-semibold text-slate-600 mb-1">
                Time-based Rules
              </div>
              <div className="text-sm text-slate-500">
                Set schedules by time of day
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-slate-200">
              <Settings className="w-8 h-8 text-cyan-500 mx-auto mb-2" />
              <div className="text-xs font-semibold text-slate-600 mb-1">
                Auto Rotation
              </div>
              <div className="text-sm text-slate-500">
                Continuous playlist looping
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleView;
