export interface MediaFile {
  id: number;
  name: string;
  type: 'image' | 'video';
  format: string;
  size: string;
  duration: number;
  resolution: string;
  uploadDate?: string;
  thumbnailUrl?: string;
  previewUrl?: string; 
}

export interface Playlist {
  id: number;
  name: string;
  items: number;
  duration: string;
  status: 'active' | 'inactive' | 'scheduled';
  boards: string[];
  mediaItems?: MediaFile[];
  repeatCount?: number;
  createdDate?: string;
  lastModified?: string;
}

export interface DisplayBoard {
  id: string;
  name: string;
  status: 'online' | 'offline' | 'syncing' | 'error';
  playlist: string;
  health: number;
  location?: string;
  resolution?: string;
  lastSync?: string;
}

export interface Schedule {
  id: number;
  name: string;
  playlist: Playlist;
  displayBoards: string[];
  startTime: string;
  endTime: string;
  days: string[];
  isActive: boolean;
}

export interface SpecialMessage {
  id: number;
  content: string;
  type: 'emergency' | 'service' | 'announcement';
  language: 'english' | 'hindi' | 'regional';
  fontSize: number;
  color: string;
  duration: number;
  isFlashing: boolean;
}

export type TabType = 'content' | 'playlists' | 'schedule';
export type OperationMode = 'auto' | 'manual';

export interface TransitionEffect {
  id: string;
  name: string;
  type: 'fade' | 'slide' | 'wipe' | 'dissolve' | 'zoom';
}

export interface PlaylistItem {
  id: string;
  mediaFileId: number;
  order: number;
  duration: number;
  transitionEffect?: TransitionEffect;
  repeatCount?: number;
}
