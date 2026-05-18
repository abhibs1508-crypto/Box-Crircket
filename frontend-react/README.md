# CricCombo Frontend (Production Architecture Scaffold)

Enterprise React + TypeScript frontend for CricCombo Smart Box Cricket OS.

## Highlights
- Role-based routing and protected routes
- Zustand modular stores (auth, booking, match, scoring, tournament, notifications)
- Centralized Axios API client with interceptors for Sanctum-backed auth flows
- Realtime integration abstraction with Laravel Echo + WebSockets
- Lazy-loaded route-split pages and reusable component layers
- Tailwind + ShadCN-ready design system foundation with dark mode tokens

## Structure
See `src/` domains: `api`, `services`, `store`, `routes`, `components`, `pages`, `hooks`, `types`, `constants`, `lib`, `styles`.

## Setup
```bash
npm install
npm run dev
```
