import { Link, Outlet } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';

export const AppShell = () => (
  <div className="min-h-screen">
    <header className="border-b border-border p-4 flex justify-between">
      <Link to={ROUTES.home} className="font-bold">CricCombo</Link>
      <nav className="flex gap-4 text-sm">
        <Link to={ROUTES.turfs}>Turfs</Link><Link to={ROUTES.liveMatches}>Live</Link><Link to={ROUTES.tournaments}>Tournaments</Link>
      </nav>
    </header>
    <main className="p-4"><Outlet /></main>
  </div>
);
