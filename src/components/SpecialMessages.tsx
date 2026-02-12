import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';

const SpecialMessages: React.FC = () => {
  const [emergencyMessage, setEmergencyMessage] = useState('');
  const [serviceMessage, setServiceMessage] = useState('');

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
        <AlertCircle className="w-5 h-5 text-amber-500" />
        Special Messages
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-4 border-l-4 border-red-500">
          <div className="text-sm font-semibold text-red-700 mb-2">
            Emergency Message
          </div>
          <textarea
            className="w-full bg-white rounded-lg p-3 text-sm border border-red-200 focus:outline-none focus:ring-2 focus:ring-red-500"
            rows={3}
            placeholder="Enter emergency message..."
            value={emergencyMessage}
            onChange={(e) => setEmergencyMessage(e.target.value)}
          />
          <button className="mt-3 w-full px-4 py-2 bg-red-500 text-white rounded-lg font-semibold text-sm hover:bg-red-600 transition-colors">
            Broadcast Now
          </button>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4 border-l-4 border-blue-500">
          <div className="text-sm font-semibold text-blue-700 mb-2">
            Service Update
          </div>
          <textarea
            className="w-full bg-white rounded-lg p-3 text-sm border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
            placeholder="Enter service update..."
            value={serviceMessage}
            onChange={(e) => setServiceMessage(e.target.value)}
          />
          <button className="mt-3 w-full px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold text-sm hover:bg-blue-600 transition-colors">
            Display Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialMessages;
