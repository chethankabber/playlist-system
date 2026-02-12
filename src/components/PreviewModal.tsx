import React from 'react';
import { X } from 'lucide-react';
import { MediaFile } from '../types';

interface PreviewModalProps {
  file: MediaFile | null;
  onClose: () => void;
}

const PreviewModal: React.FC<PreviewModalProps> = ({ file, onClose }) => {
  if (!file) return null;

  // Get the preview URL from the file object
  // In production, this would come from your backend/storage
  const getPreviewUrl = (file: MediaFile) => {
    if (file.previewUrl) {
      return file.previewUrl;
    }
    // Fallback to sample video if no URL provided
    if (file.type === 'video') {
      return 'https://www.w3schools.com/html/mov_bbb.mp4';
    }
    return null;
  };

  const previewUrl = getPreviewUrl(file);

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-8"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-5xl w-full overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-4 flex items-center justify-between">
          <h3 className="text-xl font-bold text-white">Content Preview</h3>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 rounded-lg p-2 transition-colors"
            title="Close Preview"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-8">
          {/* Video/Image Preview Area */}
          <div className="bg-black rounded-lg aspect-video flex items-center justify-center mb-6 overflow-hidden">
            {file.type === 'video' && previewUrl ? (
              <video
                controls
                autoPlay
                className="w-full h-full"
                src={previewUrl}
              >
                Your browser does not support the video tag.
              </video>
            ) : file.type === 'image' && previewUrl ? (
              <img
                src={previewUrl}
                alt={file.name}
                className="w-full h-full object-contain"
              />
            ) : (
              <div className="text-white text-center">
                <div className="text-6xl mb-4">🎬</div>
                <p className="text-lg">Preview not available</p>
                <p className="text-sm text-slate-300 mt-2">
                  File will be displayed on the board as configured
                </p>
              </div>
            )}
          </div>

          {/* File Details Grid */}
          <div className="grid grid-cols-2 gap-4 text-sm bg-slate-50 p-6 rounded-lg">
            <div>
              <span className="text-slate-600 font-semibold block mb-1">File Name:</span>
              <p className="text-slate-800 font-medium">{file.name}</p>
            </div>
            <div>
              <span className="text-slate-600 font-semibold block mb-1">Format:</span>
              <p className="text-slate-800 font-medium uppercase">{file.format}</p>
            </div>
            <div>
              <span className="text-slate-600 font-semibold block mb-1">Resolution:</span>
              <p className="text-slate-800 font-medium">{file.resolution}</p>
            </div>
            <div>
              <span className="text-slate-600 font-semibold block mb-1">Duration:</span>
              <p className="text-slate-800 font-medium">{file.duration} seconds</p>
            </div>
            <div>
              <span className="text-slate-600 font-semibold block mb-1">File Size:</span>
              <p className="text-slate-800 font-medium">{file.size}</p>
            </div>
            <div>
              <span className="text-slate-600 font-semibold block mb-1">Type:</span>
              <p className="text-slate-800 font-medium capitalize">{file.type}</p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
            <p className="text-sm text-slate-700">
              <strong>Note:</strong> This preview shows how the content will appear on display boards. 
              Verify the quality and content before pushing to live displays.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;