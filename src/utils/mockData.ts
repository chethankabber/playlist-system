import { MediaFile, Playlist, DisplayBoard } from '../types';

export const mockMediaFiles: MediaFile[] = [
  {
    id: 1,
    name: 'welcome_banner.jpg',
    type: 'image',
    format: 'jpg',
    size: '2.4 MB',
    duration: 5,
    resolution: '1920x1080',
    uploadDate: '2024-02-10',
    previewUrl: 'https://picsum.photos/1920/1080'
  },
  {
    id: 2,
    name: 'safety_video.mp4',
    type: 'video',
    format: 'mp4',
    size: '45.2 MB',
    duration: 120,
    resolution: '1920x1080',
    uploadDate: '2024-02-09',
    previewUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    id: 3,
    name: 'train_schedule.png',
    type: 'image',
    format: 'png',
    size: '1.8 MB',
    duration: 8,
    resolution: '1920x1080',
    uploadDate: '2024-02-10',
    previewUrl: 'https://picsum.photos/1920/1080?random=1'
  },
  {
    id: 4,
    name: 'promo_clip.avi',
    type: 'video',
    format: 'avi',
    size: '67.8 MB',
    duration: 180,
    resolution: '1920x1080',
    uploadDate: '2024-02-08',
    previewUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    id: 5,
    name: 'station_map.png',
    type: 'image',
    format: 'png',
    size: '3.1 MB',
    duration: 10,
    resolution: '1920x1080',
    uploadDate: '2024-02-07',
    previewUrl: 'https://picsum.photos/1920/1080?random=2'
  },
  {
    id: 6,
    name: 'emergency_procedures.mp4',
    type: 'video',
    format: 'mp4',
    size: '52.6 MB',
    duration: 150,
    resolution: '1920x1080',
    uploadDate: '2024-02-06',
    previewUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
];

export const mockPlaylists: Playlist[] = [
  {
    id: 1,
    name: 'Main Station Loop',
    items: 12,
    duration: '5:30',
    status: 'active',
    boards: ['AVDB-01', 'AVDB-02'],
    createdDate: '2024-01-15',
    lastModified: '2024-02-10'
  },
  {
    id: 2,
    name: 'Platform Announcements',
    items: 8,
    duration: '3:45',
    status: 'inactive',
    boards: ['AVDB-03'],
    createdDate: '2024-01-20',
    lastModified: '2024-02-08'
  },
  {
    id: 3,
    name: 'Emergency Messages',
    items: 4,
    duration: '2:00',
    status: 'inactive',
    boards: ['All'],
    createdDate: '2024-01-10',
    lastModified: '2024-02-05'
  },
  {
    id: 4,
    name: 'Promotional Content',
    items: 15,
    duration: '7:20',
    status: 'scheduled',
    boards: ['AVDB-01', 'AVDB-04'],
    createdDate: '2024-02-01',
    lastModified: '2024-02-09'
  },
];

export const mockDisplayBoards: DisplayBoard[] = [
  {
    id: 'AVDB-01',
    name: 'Main Concourse',
    status: 'online',
    playlist: 'Main Station Loop',
    health: 98,
    location: 'Main Hall',
    resolution: '1920x1080',
    lastSync: '2024-02-11 10:30'
  },
  {
    id: 'AVDB-02',
    name: 'Platform 1-4',
    status: 'online',
    playlist: 'Main Station Loop',
    health: 95,
    location: 'Platform Area A',
    resolution: '1920x1080',
    lastSync: '2024-02-11 10:28'
  },
  {
    id: 'AVDB-03',
    name: 'Platform 5-8',
    status: 'online',
    playlist: 'Platform Announcements',
    health: 100,
    location: 'Platform Area B',
    resolution: '1920x1080',
    lastSync: '2024-02-11 10:32'
  },
  {
    id: 'AVDB-04',
    name: 'Ticket Hall',
    status: 'syncing',
    playlist: 'Main Station Loop',
    health: 87,
    location: 'Ticketing Area',
    resolution: '1920x1080',
    lastSync: '2024-02-11 10:15'
  },
];