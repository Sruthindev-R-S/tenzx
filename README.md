# tenzx

Full-stack project with:

- Backend: Node.js + Express
- Frontend: React + Vite

## Prerequisites

- Node.js 18+ (recommended)
- npm 9+ (comes with Node.js)

## Project Structure

- `backend` - Express API server
- `frontend` - React Vite app

## Install Dependencies

Install backend modules:

```bash
cd backend
npm install
```

Install frontend modules:

```bash
cd frontend
npm install
```

From the repository root, you can do both at once:

```bash
cd backend && npm install
cd ../frontend && npm install
```

## Run the Applications

### 1. Start Backend

```bash
cd backend
npm run dev
```

### 2. Start Frontend

Open a second terminal:

```bash
cd frontend
npm run dev
```

Vite will print the frontend URL (usually `http://localhost:5173`).

## Available Scripts

### Backend (`backend/package.json`)

- `npm run dev` - Starts backend with nodemon

### Frontend (`frontend/package.json`)

- `npm run dev` - Starts Vite dev server
- `npm run build` - Builds production files
- `npm run preview` - Previews the production build
- `npm run lint` - Runs oxlint

## Notes

- If `npm run dev` fails in backend because `nodemon` is not found, install it in backend:

```bash
cd backend
npm install --save-dev nodemon
```
