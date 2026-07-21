# LumaShop - 3D E-Commerce Platform
## NovaSphere Wireless Speaker

A modern, interactive 3D product visualization platform built with React, Three.js, and Node.js.

### 🎯 Features
- ✅ 3D Product Visualization with Three.js
- ✅ Interactive Rotation & Zoom Controls
- ✅ Color Variant Switcher
- ✅ User Authentication (Email/Password)
- ✅ Stripe Payment Integration (Test Mode)
- ✅ Shopping Cart Functionality
- ✅ MongoDB Database
- ✅ Responsive Design (Dark Navy + Electric Blue)

### 🛠 Tech Stack

**Frontend:**
- React 18
- Vite
- Three.js
- Tailwind CSS
- Axios

**Backend:**
- Node.js
- Express.js
- MongoDB
- Stripe API
- JWT Authentication

**Deployment:**
- Vercel (Frontend)
- MongoDB Atlas (Database)

### 📦 Installation

#### Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Add your MongoDB URI and Stripe keys to .env
npm run dev
```

#### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### 🚀 Deployment

**Frontend (Vercel):**
```bash
npm i -g vercel
vercel deploy
```

**Environment Variables:**
- `VITE_API_URL` = Your backend URL

### 📄 License
MIT