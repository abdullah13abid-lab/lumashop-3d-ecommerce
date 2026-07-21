# 🚀 LumaShop - Complete Setup & Troubleshooting Guide

## 📋 Table of Contents
1. [Quick Start](#quick-start)
2. [Detailed Setup](#detailed-setup)
3. [Troubleshooting](#troubleshooting)
4. [Docker Setup](#docker-setup)
5. [Customization Guide](#customization-guide)

---

## ⚡ Quick Start (5 minutes)

### Prerequisites
- **Node.js** (v16+): https://nodejs.org/
- **Git**: https://git-scm.com/

### Install & Run (Choose One)

#### **Option A: 3D E-Commerce (LumaShop)**
```bash
# Clone & setup
git clone https://github.com/abdullah13abid-lab/lumashop-3d-ecommerce.git
cd lumashop-3d-ecommerce

# Terminal 1: Backend
cd backend
npm install
cp .env.example .env
npm run dev

# Terminal 2: Frontend
cd frontend
npm install
npm run dev

# Open browser → http://localhost:5173
```

#### **Option B: To-Do List (TaskMaster)**
```bash
# Clone & setup
git clone https://github.com/abdullah13abid-lab/lumashop-3d-ecommerce.git
cd lumashop-3d-ecommerce/todo-app

# Install & run
npm install
npm run dev

# Open browser → http://localhost:5173
```

---

## 📚 Detailed Setup

### For LumaShop 3D E-Commerce

#### **1. Clone Repository**
```bash
git clone https://github.com/abdullah13abid-lab/lumashop-3d-ecommerce.git
cd lumashop-3d-ecommerce
```

#### **2. Backend Setup**

```bash
cd backend
npm install
```

**Create `.env` file:**
```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/lumashop
JWT_SECRET=your_jwt_secret_key_here_12345
STRIPE_SECRET_KEY=sk_test_dummy
STRIPE_PUBLISHABLE_KEY=pk_test_dummy
FRONTEND_URL=http://localhost:5173
```

**Start Backend:**
```bash
npm run dev
```

✅ You should see:
```
✅ MongoDB connected
🚀 Server running on port 5000
```

#### **3. Frontend Setup (New Terminal)**

```bash
cd frontend
npm install
npm run dev
```

✅ You should see:
```
  VITE v4.3.9  ready in 234 ms
  ➜  Local:   http://localhost:5173/
```

#### **4. Open in Browser**
→ http://localhost:5173

---

### For TaskMaster To-Do List

#### **1. Navigate to App**
```bash
cd lumashop-3d-ecommerce/todo-app
```

#### **2. Install Dependencies**
```bash
npm install
```

#### **3. Run Development Server**
```bash
npm run dev
```

#### **4. Open in Browser**
→ http://localhost:5173

---

## 🆘 Troubleshooting

### ❌ "npm: command not found"
**Solution:** Install Node.js
- Download from: https://nodejs.org/
- Verify: `node -v` and `npm -v`

### ❌ "Port 5173 already in use"
**Solution:** Use different port
```bash
npm run dev -- --port 5174
```

### ❌ "Port 5000 already in use"
**Solution:** Kill the process
```bash
# Mac/Linux
lsof -i :5000
kill -9 <PID>

# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

### ❌ "Cannot find module 'react'"
**Solution:** Reinstall dependencies
```bash
rm -rf node_modules package-lock.json
npm install
```

### ❌ "MongoDB connection failed"
**Solution:** Check your connection string
- For testing, use dummy values in `.env`
- Or setup MongoDB Atlas (free): https://www.mongodb.com/cloud/atlas

### ❌ "CORS Error"
**Solution:** Make sure backend is running on port 5000
```bash
# Check if backend is running
curl http://localhost:5000/api/health
# Should return: {"status": "✅ Server running"}
```

### ❌ "Blank page or white screen"
**Solution:** Clear browser cache
```bash
# Hard refresh
Ctrl+Shift+R (Windows/Linux)
Cmd+Shift+R (Mac)
```

### ❌ "Module not found: three"
**Solution:** Install Three.js
```bash
cd frontend
npm install three
```

---

## 🐳 Docker Setup (Optional)

### Using Docker Compose

#### **Create `docker-compose.yml` in root:**
```yaml
version: '3.8'

services:
  backend:
    build: ./backend
    ports:
      - "5000:5000"
    environment:
      - MONGODB_URI=mongodb://mongo:27017/lumashop
      - JWT_SECRET=your_jwt_secret
      - STRIPE_SECRET_KEY=sk_test_dummy
    depends_on:
      - mongo

  mongo:
    image: mongo:latest
    ports:
      - "27017:27017"
    volumes:
      - mongo_data:/data/db

  frontend:
    build: ./frontend
    ports:
      - "5173:5173"
    depends_on:
      - backend

volumes:
  mongo_data:
```

#### **Run with Docker:**
```bash
docker-compose up
```

✅ Access at: http://localhost:5173

---

## 🎨 Customization Guide

### Change Colors

**For 3D E-Commerce:**

Edit `frontend/src/index.css`:
```css
:root {
  --dark-navy: #0D1B2A;      /* Change this */
  --electric-blue: #3A86FF;  /* Change this */
  --white: #ffffff;
}
```

**For To-Do List:**

Edit `todo-app/src/index.css`:
```css
:root {
  --primary: #667eea;        /* Change this */
  --secondary: #764ba2;      /* Change this */
  --success: #10b981;
}
```

### Change Product Name

Edit `frontend/src/pages/ProductPage.jsx`:
```javascript
const PRODUCT_DATA = {
  name: 'YOUR PRODUCT NAME',  // Change this
  price: 99.99,               // Change price
  description: 'Your description here',
}
```

### Change Logo Text

Edit `frontend/src/components/Navbar.jsx`:
```javascript
<h2>YourBrandName</h2>  // Change this
```

### Change App Title

**For 3D E-Commerce:**
Edit `frontend/index.html`:
```html
<title>Your Store Name - Product</title>
```

**For To-Do List:**
Edit `todo-app/index.html`:
```html
<title>Your App Name</title>
```

---

## 📊 Project Structure

```
lumashop-3d-ecommerce/
├── backend/
│   ├── server.js              # Express server
│   ├── models/                # MongoDB schemas
│   ├── routes/                # API endpoints
│   ├── package.json
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── components/        # React components
│   │   ├── pages/             # Page components
│   │   ├── App.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── todo-app/                  # Standalone to-do app
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── index.css
│   ├── index.html
│   └── package.json
└── README.md
```

---

## 🌐 Deployment

### Deploy Frontend to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd frontend
vercel deploy
```

### Deploy Backend to Railway

1. Sign up at https://railway.app
2. Connect GitHub
3. Select this repo
4. Add environment variables
5. Deploy!

---

## ✅ Verification Checklist

- [ ] Node.js installed (check: `node -v`)
- [ ] Git installed (check: `git -v`)
- [ ] Repository cloned
- [ ] Dependencies installed (`npm install`)
- [ ] Backend running on port 5000 (if LumaShop)
- [ ] Frontend running on port 5173
- [ ] Browser can access http://localhost:5173
- [ ] No errors in console
- [ ] App loads without blank screen

---

## 🎯 What to Do Next

1. ✅ Run the application
2. ✅ Test all features
3. ✅ Customize colors & content
4. ✅ Add real MongoDB & Stripe keys
5. ✅ Deploy to production

---

## 📞 Need Help?

If you encounter issues:
1. Check the [Troubleshooting](#troubleshooting) section
2. Verify all prerequisites are installed
3. Check terminal for error messages
4. Clear cache and restart servers

---

**Happy coding! 🚀**
