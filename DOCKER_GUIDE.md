# 🐳 Docker Setup Guide

## What is Docker?

Docker allows you to run the entire application (frontend, backend, database) in isolated containers without installing dependencies manually.

---

## Prerequisites

- **Docker Desktop**: https://www.docker.com/products/docker-desktop
- Verify installation: `docker --version`

---

## Quick Start with Docker

### Step 1: Create Docker Files

These files are already in the repo. Just make sure they exist:
- `Dockerfile` (backend)
- `frontend/Dockerfile`
- `docker-compose.yml`

### Step 2: Start Everything

```bash
# From the root directory
docker-compose up --build
```

### Step 3: Wait for Services

You should see:
```
✅ MongoDB connected
🚀 Backend running on port 5000
✅ Frontend ready on port 5173
```

### Step 4: Open in Browser

→ **http://localhost:5173**

---

## Docker Compose Services

### Services Running

1. **Backend API** (port 5000)
   - Express.js server
   - Node.js runtime
   - Auto-restart on code changes

2. **Frontend App** (port 5173)
   - React + Vite
   - Hot module replacement
   - Auto-restart on code changes

3. **MongoDB** (port 27017)
   - Database
   - Data persisted in volume
   - No installation needed

---

## Common Docker Commands

### View Logs
```bash
# All services
docker-compose logs

# Specific service
docker-compose logs backend
docker-compose logs frontend
```

### Stop Services
```bash
docker-compose down
```

### Restart Services
```bash
docker-compose restart
```

### View Running Containers
```bash
docker ps
```

### Clean Everything
```bash
docker-compose down -v  # -v removes volumes too
```

---

## Docker Advantages

✅ No manual setup needed
✅ Same environment everywhere (Windows, Mac, Linux)
✅ Easy to share with team members
✅ Auto-restart on code changes
✅ Database included (MongoDB)
✅ One command to start everything

---

## Troubleshooting Docker

### Port Already in Use

```bash
# Change ports in docker-compose.yml
ports:
  - "5001:5000"  # Use 5001 instead
```

### Container Won't Start

```bash
# Check logs
docker-compose logs backend

# Rebuild
docker-compose down
docker-compose up --build
```

### Need Fresh Database

```bash
# Remove volumes
docker-compose down -v
docker-compose up
```

---

**Docker makes development much easier! 🐳**
