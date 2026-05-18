import { Navigate, Outlet } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import { useAuthStore } from '@/store/auth.store';
import { UserRole } from '@/types/auth';

export const ProtectedRoute = () => {
  const token = useAuthStore((s) => s.token);
  return token ? <Outlet /> : <Navigate to={ROUTES.login} replace />;
};

export const RoleProtectedRoute = ({ allowedRoles }: { allowedRoles: UserRole[] }) => {
  const role = useAuthStore((s) => s.user?.role);
  return role && allowedRoles.includes(role) ? <Outlet /> : <Navigate to={ROUTES.dashboard} replace />;
};
