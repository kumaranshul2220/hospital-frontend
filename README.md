# Shri Ram Hospital – HMS Frontend

React + Vite frontend for the Hospital Management System.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 + Vite 7 |
| Styling | Tailwind CSS v4 (via `@tailwindcss/vite`) |
| Routing | React Router v7 |
| HTTP | Axios (centralized client with JWT interceptors) |
| Charts | Recharts |
| Icons | Lucide React |
| Animations | Framer Motion |
| Utilities | clsx, tailwind-merge |

## Prerequisites

- **Node.js** v18 or higher
- **Backend server** running on `http://localhost:3000` (see `hospital-backend/README.md`)

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

App will be available at **http://localhost:5173**

## Environment Variables (`.env`)

```env
VITE_API_BASE_URL=http://localhost:3000
```

> The `.env` file is git-ignored. Copy and edit as needed for staging or production environments.

## Default Login

| Field | Value |
|-------|-------|
| Username | `admin` |
| Password | `Admin@123` |

> Run `npm run seed` in the backend first to create this user.

## Pages & Modules

| Route | Module | Status |
|-------|--------|--------|
| `/login` | Login Page | ✅ Complete |
| `/dashboard` | Super Admin Dashboard | ✅ Complete |
| `/patients` | Patient Management | ✅ Complete |
| `/billing` | Revenue & Billing | ✅ Complete |
| `/inventory` | Pharmacy & Inventory | ✅ Complete |
| `/doctors` | Medical Staff | 🟡 Placeholder |
| `/staff` | Staff & Nurses | 🟡 Placeholder |
| `/wards` | Ward & Bed Management | 🟡 Placeholder |
| `/settings` | System Settings | 🟡 Placeholder |

## Project Structure

```
hospital-frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── common/        # Sidebar, Table, shared UI
│   │   └── dashboard/     # StatCard, BedAvailabilityChart
│   ├── context/
│   │   └── AuthContext.jsx  # Auth state + JWT session restore
│   ├── hooks/             # Custom React hooks
│   ├── layouts/
│   │   └── MainLayout.jsx   # Protected layout (sidebar + outlet)
│   ├── pages/
│   │   ├── LoginPage.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Patients.jsx
│   │   ├── Billing.jsx
│   │   └── Inventory.jsx
│   ├── services/
│   │   └── api/
│   │       └── apiClient.js   # Axios instance with JWT interceptors
│   ├── utils/
│   │   └── cn.js              # clsx + tailwind-merge helper
│   ├── App.jsx                # Router + AuthProvider
│   ├── main.jsx               # React entry point
│   └── index.css              # Tailwind v4 + theme tokens
├── index.html                 # Google Fonts loaded here (Tailwind v4 requirement)
├── vite.config.js             # Vite + @tailwindcss/vite plugin
└── .env                       # API URL (git-ignored)
```

## Design System

Defined in `src/index.css` using Tailwind v4 `@theme`:

| Token | Value |
|-------|-------|
| `--color-primary` | `#00868F` (Deep Teal) |
| `--color-primary-light` | `#E6F4F5` |
| `--color-primary-dark` | `#006D75` |
| `--color-background` | `#F8F9FA` |
| Font | Inter (Google Fonts) |

## Key Notes

### Tailwind v4 Setup
This project uses **Tailwind CSS v4** with the official `@tailwindcss/vite` plugin. **Do not** use `postcss.config.js` or `tailwind.config.js` — they are not needed and will cause conflicts.

Google Fonts must be loaded via `<link>` in `index.html` (not `@import url()` in CSS), because Tailwind v4 expands inline during compilation and makes subsequent `@import` statements invalid.

### Authentication Flow
1. User logs in → backend returns JWT
2. Token stored in `localStorage`
3. `AuthContext` reads token on mount and calls `/api/v1/auth/me` to restore session
4. `apiClient.js` auto-attaches `Authorization: Bearer <token>` header to every request
5. 401 responses auto-clear token and redirect to `/login`

## npm Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
