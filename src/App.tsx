import React, { useState } from 'react';
import { Upload, List, Calendar } from 'lucide-react';
import Header from './components/Header';
import StatusCards from './components/StatusCards';
import MediaLibrary from './components/MediaLibrary';
import PlaylistManager from './components/PlaylistManager';
import ScheduleView from './components/ScheduleView';
import SpecialMessages from './components/SpecialMessages';
import DisplayBoardStatus from './components/DisplayBoardStatus';
import OperationModeSelector from './components/OperationModeSelector';
import QuickActions from './components/QuickActions';
import PreviewModal from './components/PreviewModal';
import { TabType, OperationMode, MediaFile } from './types';
import { mockMediaFiles, mockPlaylists, mockDisplayBoards } from './utils/mockData';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('content');
  const [operationMode, setOperationMode] = useState<OperationMode>('manual');
  const [selectedPlaylist, setSelectedPlaylist] = useState<number | null>(null);
  const [previewItem, setPreviewItem] = useState<MediaFile | null>(null);

  const activePlaylists = mockPlaylists.filter(p => p.status === 'active').length;
  const onlineBoards = mockDisplayBoards.filter(b => b.status === 'online').length;
  const syncingBoards = mockDisplayBoards.filter(b => b.status === 'syncing').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 font-sans">
      <Header />

      <div className="max-w-[1600px] mx-auto px-6 py-6">
        <StatusCards
          activePlaylists={activePlaylists}
          totalMediaFiles={mockMediaFiles.length}
          displayBoards={{ online: onlineBoards, total: mockDisplayBoards.length }}
          pendingSyncs={syncingBoards}
        />

        <div className="grid grid-cols-3 gap-6">
          {/* Left Panel - Content & Playlist Management */}
          <div className="col-span-2 space-y-6">
            {/* Tab Navigation */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="flex border-b border-slate-200">
                <button
                  onClick={() => setActiveTab('content')}
                  className={`flex-1 px-6 py-4 font-semibold text-sm transition-all ${
                    activeTab === 'content'
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <Upload className="w-4 h-4 inline mr-2" />
                  Media Library
                </button>
                <button
                  onClick={() => setActiveTab('playlists')}
                  className={`flex-1 px-6 py-4 font-semibold text-sm transition-all ${
                    activeTab === 'playlists'
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <List className="w-4 h-4 inline mr-2" />
                  Playlists
                </button>
                <button
                  onClick={() => setActiveTab('schedule')}
                  className={`flex-1 px-6 py-4 font-semibold text-sm transition-all ${
                    activeTab === 'schedule'
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <Calendar className="w-4 h-4 inline mr-2" />
                  Scheduling
                </button>
              </div>

              <div className="p-6">
                {activeTab === 'content' && (
                  <MediaLibrary
                    mediaFiles={mockMediaFiles}
                    onPreview={setPreviewItem}
                  />
                )}

                {activeTab === 'playlists' && (
                  <PlaylistManager
                    playlists={mockPlaylists}
                    selectedPlaylist={selectedPlaylist}
                    onSelectPlaylist={setSelectedPlaylist}
                  />
                )}

                {activeTab === 'schedule' && <ScheduleView />}
              </div>
            </div>

            <SpecialMessages />
          </div>

          {/* Right Panel - Display Board Status & Control */}
          <div className="space-y-6">
            <OperationModeSelector
              mode={operationMode}
              onModeChange={setOperationMode}
            />

            <DisplayBoardStatus boards={mockDisplayBoards} />

            <QuickActions />
          </div>
        </div>
      </div>

      <PreviewModal file={previewItem} onClose={() => setPreviewItem(null)} />
    </div>
  );
}

export default App;
