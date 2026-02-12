# Video Display Management System - IPIS

A comprehensive React + TypeScript + Vite + Tailwind CSS application for managing video display boards in an Integrated Passenger Information System (IPIS).

## Features

### 📁 Media Library Management
- Upload and manage images (.bmp, .jpeg, .jpg, .png, .tiff)
- Upload and manage videos (.mpeg, .mp4, .wmv, .dat, .avi, .mov)
- Preview media files with metadata
- Edit and delete media files
- Support for high-resolution content (1920x1080)

### 🎵 Playlist Management
- Create and manage multiple playlists
- Configure display duration and transition effects
- Assign playlists to specific display boards
- Real-time status monitoring (active/inactive/scheduled)
- Preview, edit, duplicate, and push functionality
- Continuous looping with repeat count configuration

### 📅 Scheduling System
- Time-based content scheduling
- Automated playlist rotation
- Configure schedules by time of day
- Support for recurring schedules

### 🚨 Special Messages
- Emergency broadcast capability
- Service update announcements
- Multi-language support (English/Hindi/Regional)
- Configurable font sizes and colors
- Flashing or static message display

### 📊 Display Board Monitoring
- Real-time board status (online/offline/syncing)
- Health percentage indicators
- Current playlist tracking
- Network topology monitoring
- 42 display boards supported

### ⚙️ Operation Modes
- **Auto Mode**: Scheduled automation with time-based rules
- **Manual Mode**: Operator-controlled content management

## Technology Stack

- **React 18.2** - UI library
- **TypeScript 5.2** - Type safety
- **Vite 5.0** - Build tool and dev server
- **Tailwind CSS 3.3** - Utility-first CSS framework
- **Lucide React** - Icon library

## Project Structure

```
video-display-system/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── StatusCards.tsx
│   │   ├── MediaLibrary.tsx
│   │   ├── PlaylistManager.tsx
│   │   ├── ScheduleView.tsx
│   │   ├── SpecialMessages.tsx
│   │   ├── DisplayBoardStatus.tsx
│   │   ├── OperationModeSelector.tsx
│   │   ├── QuickActions.tsx
│   │   └── PreviewModal.tsx
│   ├── types/
│   │   └── index.ts
│   ├── utils/
│   │   └── mockData.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── postcss.config.js
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Key Requirements Implemented

### 5.2.1 File Format Support
✅ Images: .bmp, .jpeg, .jpg, .png, .tiff
✅ Videos: .mpeg, .mp4, .wmv, .dat, .avi, .mov

### 5.2.2 Playlist Configuration
✅ User-configurable playlist names
✅ Store multiple playlists
✅ Sequential playback
✅ Continuous loop on completion

### 5.2.3 Display Effects
✅ Transition effects configuration
✅ Display and clearing effects for still images

### 5.2.4 Schedule Attributes
✅ Repeat count configuration
✅ Stay time for each item
✅ Display controller accepts schedules from CDC

### 5.2.5 Data Integration
✅ Interface for train arrival/departure information
✅ Customizable data processing
✅ Pre-configured display formats

### 5.2.6 Network Operations
✅ Centralized control from CDC
✅ Network-based schedule pushing
✅ Remote display board management

### 5.2.7 Preview Feature
✅ Content preview before display
✅ Schedule preview and editing
✅ User alterations before publishing

### 5.2.8 Adjustable Display Time
✅ Configurable stay time for still images
✅ Different durations for different images
✅ Time configuration in seconds

### 5.2.9 Special Messages
✅ Live message display capability
✅ Flashing or timed messages
✅ Multi-language support (English/Hindi/Regional)
✅ Different font sizes and colors
✅ Bottom-of-screen display positioning

### 5.2.10 Fit to Display Board
✅ Aspect ratio maintenance
✅ Automatic scaling for different resolutions
✅ Pixel resolution adaptation

## Design Principles

- **Consistency**: Matches existing IPIS Admin interface aesthetic
- **Usability**: Intuitive navigation with clear visual hierarchy
- **Real-time**: Live status updates and monitoring
- **Responsive**: Adapts to different screen sizes
- **Professional**: Clean, modern interface suitable for operations

## Color Scheme

- Primary: Blue/Cyan gradients
- Success: Green indicators
- Warning: Amber/Orange alerts
- Error: Red notifications
- Background: Slate with blue tints

## Future Enhancements

- [ ] File upload drag-and-drop functionality
- [ ] Advanced transition effects library
- [ ] Schedule conflict detection
- [ ] Historical analytics and reporting
- [ ] Multi-user access control
- [ ] Real-time synchronization with display boards
- [ ] Video preview playback
- [ ] Batch operations for multiple boards
- [ ] Export/import playlist configurations
- [ ] Integration with railway designated server systems

## License

Proprietary - IPIS Railway Management System

## Support

For technical support or feature requests, contact the IPIS development team.
