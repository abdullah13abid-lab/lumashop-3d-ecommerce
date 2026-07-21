# ✅ Verification & Testing Guide

## Pre-Launch Checklist

### ✓ Prerequisites
- [ ] Node.js installed (`node -v` returns v16+)
- [ ] Git installed (`git -v` works)
- [ ] npm works (`npm -v` returns version)

### ✓ Repository
- [ ] Cloned from GitHub
- [ ] All files present
- [ ] No file permission errors

### ✓ Dependencies
- [ ] Backend: `npm install` completed
- [ ] Frontend: `npm install` completed
- [ ] No red error messages in logs

---

## Testing the Backend

### Start Backend
```bash
cd backend
npm run dev
```

### Expected Output
```
✅ MongoDB connected
🚀 Server running on port 5000
```

### Test API Endpoints

#### Health Check
```bash
curl http://localhost:5000/api/health
```

Expected response:
```json
{"status": "✅ Server running"}
```

#### Get Products
```bash
curl http://localhost:5000/api/products
```

Expected: JSON array of products

---

## Testing the Frontend

### Start Frontend
```bash
cd frontend
npm run dev
```

### Expected Output
```
  VITE v4.3.9  ready in XXX ms
  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

### Open in Browser
→ http://localhost:5173

### Visual Checks
- [ ] Page loads without errors
- [ ] Header visible with title
- [ ] 3D product viewer displays
- [ ] Colors match branding
- [ ] Buttons are clickable
- [ ] No console errors (F12 → Console)

---

## Testing Features

### For LumaShop (3D E-Commerce)

#### Product Viewer
- [ ] 3D sphere renders
- [ ] Rotation on mouse drag works
- [ ] Zoom works with scroll
- [ ] Auto-rotation smooth

#### Color Switcher
- [ ] All 4 colors available
- [ ] Clicking color changes sphere
- [ ] Colors are accurate

#### Authentication
- [ ] Can navigate to /auth
- [ ] Login form displays
- [ ] Register form displays
- [ ] Form validation works

#### Cart
- [ ] Add to Cart button works
- [ ] Navigates to checkout
- [ ] Cart count updates

#### Navigation
- [ ] All links work
- [ ] Navbar sticky on scroll
- [ ] Responsive on mobile

### For TaskMaster (To-Do List)

#### Add Tasks
- [ ] Type in input and press Enter
- [ ] Task appears in list
- [ ] Task has correct data

#### Edit Tasks
- [ ] Click pencil icon
- [ ] Edit form appears
- [ ] Can modify fields
- [ ] Save updates correctly

#### Delete Tasks
- [ ] Click trash icon
- [ ] Task removed instantly
- [ ] Works from list

#### Complete Tasks
- [ ] Click checkbox
- [ ] Task marked as done
- [ ] Strikethrough appears
- [ ] Stats update

#### Filters
- [ ] All filter works
- [ ] Active filter works
- [ ] Completed filter works
- [ ] Priority filters work

#### Search
- [ ] Type in search box
- [ ] Results filter in real-time
- [ ] Case-insensitive

#### Local Storage
- [ ] Close browser
- [ ] Reopen page
- [ ] Tasks still there
- [ ] Data persists

#### Export
- [ ] Click Export button
- [ ] JSON file downloads
- [ ] Filename has date
- [ ] Valid JSON format

---

## Browser Console Check

1. Open browser DevTools: `F12` or `Ctrl+Shift+I`
2. Go to **Console** tab
3. Look for errors (red text)
4. Should see only warnings, no errors

### Common Non-Fatal Warnings
```
[Deprecation] Warning...
[Warn] Message...
```

### Errors to Fix
```
Uncaught Error: ...
Failed to fetch...
Cannot read property...
```

---

## Network Testing

### Check Backend Communication

1. Open DevTools
2. Go to **Network** tab
3. Perform an action (login, add task, etc.)
4. Look for API calls
5. Check status codes:
   - **200** = Success ✓
   - **404** = Not found ✗
   - **500** = Server error ✗

---

## Performance Testing

### Load Time
- Page should load in < 3 seconds
- 3D model in < 5 seconds

### Responsiveness
- No lag when typing
- Smooth animations
- No stuttering

### Memory
- Check Task Manager (Windows) or Activity Monitor (Mac)
- Node process < 200MB
- Browser < 500MB

---

## Mobile Testing

### Test Responsive Design

**Chrome DevTools:**
1. Press `F12`
2. Click device icon (top-left)
3. Test at different sizes:
   - iPhone SE (375px)
   - iPad (768px)
   - Desktop (1024px+)

### Check on Actual Phone

```bash
# Find your computer's IP
# Windows: ipconfig
# Mac: ifconfig
# Look for IPv4 Address like 192.168.x.x

# Run with host flag
npm run dev -- --host

# On phone, visit:
http://YOUR_IP:5173
```

---

## Troubleshooting During Testing

### Blank Page
- [ ] Clear cache: `Ctrl+Shift+Delete`
- [ ] Hard refresh: `Ctrl+Shift+R`
- [ ] Check console for errors
- [ ] Restart dev server

### Slow Performance
- [ ] Check network tab
- [ ] Look for large files
- [ ] Check backend logs
- [ ] Restart services

### API Errors
- [ ] Verify backend running
- [ ] Check CORS errors
- [ ] Verify .env variables
- [ ] Check MongoDB connection

### Missing Styles
- [ ] Check CSS files load
- [ ] Clear browser cache
- [ ] Verify CSS imports
- [ ] Check file paths

---

## Success Criteria

Your setup is successful if:
- ✅ Both terminals show "running" messages
- ✅ Browser opens without errors
- ✅ All features work as described
- ✅ No red errors in console
- ✅ All buttons are clickable
- ✅ Data persists (to-do list)
- ✅ Responsive on mobile

---

**You're ready to launch! 🚀**
