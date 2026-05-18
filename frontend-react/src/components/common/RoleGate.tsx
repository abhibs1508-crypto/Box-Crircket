import { ReactNode } from 'react';
import { useAuthStore } from '@/store/auth.store';
import { UserRole } from '@/types/auth';

export const RoleGate = ({ roles, children }: { roles: UserRole[]; children: ReactNode }) => {
  const role = useAuthStore((s) => s.user?.role);
  if (!role || !roles.includes(role)) return null;
  return <>{children}</>;
};
