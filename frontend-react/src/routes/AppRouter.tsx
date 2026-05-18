import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AppShell } from '@/components/layout/AppShell';
import { ROUTES } from '@/constants/routes';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProtectedRoute, RoleProtectedRoute } from './guards';

const HomePage = lazy(() => import('@/pages/public/HomePage').then((m) => ({ default: m.HomePage })));
const TurfListingPage = lazy(() => import('@/pages/public/TurfListingPage').then((m) => ({ default: m.TurfListingPage })));
const LiveMatchesPage = lazy(() => import('@/pages/public/LiveMatchesPage').then((m) => ({ default: m.LiveMatchesPage })));
const TournamentListingPage = lazy(() => import('@/pages/public/TournamentListingPage').then((m) => ({ default: m.TournamentListingPage })));
const LoginPage = lazy(() => import('@/pages/public/LoginPage').then((m) => ({ default: m.LoginPage })));
const RegisterPage = lazy(() => import('@/pages/public/RegisterPage').then((m) => ({ default: m.RegisterPage })));
const DashboardPage = lazy(() => import('@/pages/protected/DashboardPage').then((m) => ({ default: m.DashboardPage })));
const ScoringPanelPage = lazy(() => import('@/pages/protected/ScoringPanelPage').then((m) => ({ default: m.ScoringPanelPage })));

export const AppRouter = () => (
  <Suspense fallback={<div className="p-8">Loading...</div>}>
    <Routes>
      <Route element={<AppShell />}>
        <Route path={ROUTES.home} element={<HomePage />} />
        <Route path={ROUTES.turfs} element={<TurfListingPage />} />
        <Route path={ROUTES.liveMatches} element={<LiveMatchesPage />} />
        <Route path={ROUTES.tournaments} element={<TournamentListingPage />} />
        <Route path={ROUTES.login} element={<LoginPage />} />
        <Route path={ROUTES.register} element={<RegisterPage />} />

        <Route element={<ProtectedRoute />}>
          <Route path={ROUTES.dashboard} element={<DashboardPage />} />
          <Route element={<RoleProtectedRoute allowedRoles={['operator']} />}>
            <Route path={ROUTES.scoringPanel} element={<ScoringPanelPage />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
        <Route path="/app" element={<Navigate to={ROUTES.dashboard} replace />} />
      </Route>
    </Routes>
  </Suspense>
);
