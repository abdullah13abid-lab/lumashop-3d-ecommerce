# 🎯 Quick Reference

## 🚀 Start Applications

### 3D E-Commerce (LumaShop)
```bash
# Terminal 1: Backend
cd backend && npm install && npm run dev

# Terminal 2: Frontend
cd frontend && npm install && npm run dev

# Open: http://localhost:5173
```

### To-Do List (TaskMaster)
```bash
cd todo-app && npm install && npm run dev

# Open: http://localhost:5173
```

### With Docker
```bash
docker-compose up --build
# Open: http://localhost:5173
```

---

## 📁 Important Files

### Configuration
- `backend/.env.example` → Copy to `.env`
- `frontend/vite.config.js` → Vite config
- `docker-compose.yml` → Docker setup

### Frontend
- `frontend/src/pages/ProductPage.jsx` → Product details
- `frontend/src/components/ProductViewer.jsx` → 3D viewer
- `frontend/src/index.css` → Global styles
- `frontend/index.html` → Page title

### Backend
- `backend/server.js` → Express server
- `backend/models/` → MongoDB schemas
- `backend/routes/` → API endpoints

### To-Do App
- `todo-app/src/App.jsx` → Main component
- `todo-app/src/components/` → Components
- `todo-app/src/index.css` → Styles

---

## 🎨 Customization Quick Links

### Change Colors
```css
/* frontend/src/index.css */
:root {
  --dark-navy: #0D1B2A;      /* Change this */
  --electric-blue: #3A86FF;  /* Change this */
}
```

### Change Product Name
```javascript
// frontend/src/pages/ProductPage.jsx
const PRODUCT_DATA = {
  name: 'YOUR PRODUCT NAME',
  price: 99.99,
}
```

### Change App Title
```html
<!-- frontend/index.html -->
<title>Your App Name</title>
```

### Change Logo
```javascript
// frontend/src/components/Navbar.jsx
<h2>YourBrandName</h2>
```

---

## 🐛 Common Issues & Fixes

| Issue | Fix |
|-------|-----|
| Port 5173 in use | `npm run dev -- --port 5174` |
| Port 5000 in use | `lsof -i :5000 && kill -9 <PID>` |
| Module not found | `npm install` (reinstall) |
| Blank page | `Ctrl+Shift+R` (hard refresh) |
| CORS error | Backend must run on 5000 |
| DB connection fail | Check MONGODB_URI in .env |

---

## 📊 Project Structure

```
lumashop-3d-ecommerce/
├── backend/                # Express API
│   ├── server.js
│   ├── models/            # MongoDB schemas
│   ├── routes/            # API endpoints
│   └── .env.example
├── frontend/              # React app
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── index.css
│   └── index.html
├── todo-app/              # To-do app
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── index.css
│   └── index.html
├── docker-compose.yml     # Docker setup
├── SETUP_GUIDE.md        # This guide
├── CUSTOMIZATION_GUIDE.md # Styling
└── README.md             # Main readme
```

---

## 🌐 URLs

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000
- **MongoDB**: mongodb://localhost:27017/lumashop
- **API Docs**: http://localhost:5000/api/

---

## 📦 Install Commands

```bash
# Install all dependencies
cd backend && npm install
cd ../frontend && npm install
cd ../todo-app && npm install

# Install specific package
npm install package-name

# Update all packages
npm update

# Remove package
npm uninstall package-name
```

---

## 🔧 Useful npm Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check for outdated packages
npm outdated

# Clean install
rm -rf node_modules package-lock.json && npm install
```

---

## 🐳 Docker Commands

```bash
# Start all services
docker-compose up

# Start in background
docker-compose up -d

# Stop all services
docker-compose down

# View logs
docker-compose logs

# Restart services
docker-compose restart

# Remove volumes
docker-compose down -v
```

---

## 🔐 Environment Variables

### Backend (.env)
```env
PORT=5000
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/db
JWT_SECRET=your_secret_key
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...
FRONTEND_URL=http://localhost:5173
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000
```

---

## 📱 Testing URLs

**Products API:**
```
GET http://localhost:5000/api/products
```

**Health Check:**
```
GET http://localhost:5000/api/health
```

**Register User:**
```
POST http://localhost:5000/api/auth/register
Body: { email, password, firstName, lastName }
```

---

**Need help? Check SETUP_GUIDE.md! 📚**
