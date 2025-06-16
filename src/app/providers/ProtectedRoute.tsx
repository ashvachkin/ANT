import { Navigate } from 'react-router';

import { isAuthenticated } from '~/shared/api/auth';

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  if (!isAuthenticated()) {
    return <Navigate to='/login' />;
  }
  return children;
};
