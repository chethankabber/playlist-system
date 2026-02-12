import React from 'react';
import { Upload, Image, Film, Eye, Edit, Trash2, Plus, AlertCircle } from 'lucide-react';
import { MediaFile } from '../types';

interface MediaLibraryProps {
  mediaFiles: MediaFile[];
  onPreview: (file: MediaFile) => void;
}

const MediaLibrary: React.FC<MediaLibraryProps> = ({ mediaFiles, onPreview }) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-slate-800">Media Library</h3>
        <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold text-sm hover:shadow-lg transition-all flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Upload Media
        </button>
      </div>

      <div className="space-y-3">
        {mediaFiles.map((file) => (
          <div
            key={file.id}
            className="group bg-slate-50 rounded-lg p-4 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  file.type === 'image' ? 'bg-purple-100' : 'bg-blue-100'
                }`}
              >
                {file.type === 'image' ? (
                  <Image className="w-6 h-6 text-purple-600" />
                ) : (
                  <Film className="w-6 h-6 text-blue-600" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-slate-800 truncate">
                  {file.name}
                </h4>
                <div className="flex items-center gap-4 mt-1 text-xs text-slate-500">
                  <span className="uppercase font-mono">{file.format}</span>
                  <span>•</span>
                  <span>{file.size}</span>
                  <span>•</span>
                  <span>{file.resolution}</span>
                  <span>•</span>
                  <span>{file.duration}s</span>
                </div>
              </div>
              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => onPreview(file)}
                  className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  title="Preview"
                >
                  <Eye className="w-4 h-4" />
                </button>
                <button
                  className="p-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors"
                  title="Edit"
                >
                  <Edit className="w-4 h-4" />
                </button>
                <button
                  className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                  title="Delete"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
          <div className="text-sm text-slate-700">
            <strong>Supported Formats:</strong>
            <div className="mt-1">
              <span className="font-semibold">Images:</span> .bmp, .jpeg, .jpg,
              .png, .tiff
              <br />
              <span className="font-semibold">Videos:</span> .mpeg, .mp4, .wmv,
              .dat, .avi, .mov
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaLibrary;
