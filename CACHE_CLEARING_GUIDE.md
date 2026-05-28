# Cache Clearing Guide for Updated Icons

The icons have been refactored and cache-busting has been implemented. However, you may need to clear your browser cache to see the updated icons immediately.

## Quick Fix: Browser Cache Clear

### Google Chrome / Edge / Brave
1. Press **Ctrl + Shift + Delete** (Windows) or **Cmd + Shift + Delete** (Mac)
2. Select **"All time"** for time range
3. Check **"Cached images and files"**
4. Click **"Clear data"**
5. Refresh the website (F5 or Cmd + R)

### Firefox
1. Press **Ctrl + Shift + Delete** (Windows) or **Cmd + Shift + Delete** (Mac)
2. Select **"Everything"** in the time range
3. Check **"Cache"**
4. Click **"Clear Now"**
5. Refresh the website

### Safari
1. Click **Safari** → **Settings** (or **Preferences**)
2. Go to **"Privacy"** tab
3. Click **"Manage Website Data..."**
4. Select your domain, click **"Remove"**
5. Refresh the website

## What Was Fixed

✅ **Cache-Busting Added**
- All script tags now include version parameter: `main.js?v=2026052801`
- SVG files fetched with `cache: 'no-store'` directive
- Each SVG fetch includes query parameter: `?v={timestamp}`

✅ **Icon Preloading Optimized**
- All SVG icons are preloaded once at page startup
- Icons are reused from memory, not fetched repeatedly
- Fallback to inline SVGs if external files not available

✅ **Better Logging**
- Console now shows cache version and preload status
- Shows number of icons loaded and time taken
- Warnings for missing or unparseable icons

## Console Debugging

Open browser DevTools (F12) and check the Console tab for messages like:
```
[SVG Cache] Initialized cache version: 1716854231234
[SVG Cache] Starting icon preload...
[SVG Cache] Preload complete in 45.23ms, loaded 16 icons
```

## Manual Cache Reset (Developers)

To force a new cache version, update the version parameter in all HTML files:
```html
<!-- Old -->
<script src="assets/js/main.js?v=2026052801"></script>

<!-- New (increment version) -->
<script src="assets/js/main.js?v=2026052802"></script>
```

## Production Deployment

For production, use:
- **Git commit hash**: `main.js?v={COMMIT_HASH}`
- **Build timestamp**: `main.js?v={BUILD_TIMESTAMP}`
- **Version number**: `main.js?v=1.2.3`

This ensures browsers always fetch fresh assets when you deploy updates.
