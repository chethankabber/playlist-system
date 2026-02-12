# Quick Start Guide - Video Display Management System

## Installation & Setup

### Step 1: Install Dependencies
```bash
cd video-display-system
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Step 3: Build for Production
```bash
npm run build
```

The production build will be in the `dist` folder.

## Key Features Overview

### 1. Media Library (Content Tab)
- Click "Upload Media" to add new images or videos
- Supported formats clearly displayed
- Preview files by clicking the eye icon
- Edit or delete files with action buttons

### 2. Playlists Management (Playlists Tab)
- Create new playlists with "Create Playlist" button
- Assign playlists to specific display boards
- See active/inactive status at a glance
- Push playlists to displays with one click

### 3. Scheduling (Schedule Tab)
- Configure time-based schedules
- Set up automatic content rotation
- Manage recurring schedules

### 4. Display Board Monitoring (Right Panel)
- Real-time status of all 42 display boards
- Health percentage for each board
- Currently playing playlist information
- Color-coded status indicators

### 5. Operation Modes (Right Panel)
- **Auto Mode**: Schedules run automatically
- **Manual Mode**: Full operator control

### 6. Special Messages
- Emergency broadcasts (red panel)
- Service updates (blue panel)
- Instant push to all displays

### 7. Quick Actions (Right Panel)
- Push to All Displays
- Sync All Boards
- Preview Mode

## Tips for Best Use

1. **Organize Your Media**: Use clear naming conventions for files
2. **Test Before Broadcasting**: Always use Preview feature
3. **Monitor Health**: Keep display board health above 90%
4. **Schedule Smart**: Use Auto Mode for regular content rotation
5. **Emergency Ready**: Keep emergency messages pre-configured

## Customization

### Modify Mock Data
Edit `/src/utils/mockData.ts` to:
- Add more media files
- Create custom playlists
- Configure display boards

### Change Colors
Edit `/tailwind.config.js` to customize:
- Primary colors
- Accent colors
- Animation speeds

### Add Features
The component-based architecture makes it easy to:
- Add new tabs
- Create custom components
- Extend functionality

## Integration with Backend

To integrate with your backend API:

1. Create API service functions in `/src/utils/api.ts`
2. Replace mock data with API calls
3. Add state management (Redux/Context) if needed
4. Implement WebSocket for real-time updates

Example API integration:
```typescript
// src/utils/api.ts
export const uploadMedia = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  
  const response = await fetch('/api/media/upload', {
    method: 'POST',
    body: formData
  });
  
  return response.json();
};
```

## Troubleshooting

### Issue: npm install fails
**Solution**: Make sure you have Node.js 18+ installed

### Issue: Styles not loading
**Solution**: Run `npm install` again to ensure Tailwind is properly installed

### Issue: TypeScript errors
**Solution**: Check `tsconfig.json` and ensure all type definitions are correct

## Next Steps

1. ✅ Set up the project
2. ✅ Review the UI and features
3. 🔄 Customize with your branding
4. 🔄 Integrate with your backend API
5. 🔄 Add authentication/authorization
6. 🔄 Deploy to production

## Support

For questions or issues:
- Review the main README.md
- Check TypeScript type definitions in `/src/types/`
- Examine component structure in `/src/components/`

Happy coding! 🚀
