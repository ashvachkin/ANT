import { useTranslation } from 'react-i18next';
import { Routes, Route, Navigate } from 'react-router-dom';

import { isAuthenticated } from './auth';
import { LoginForm } from './LoginForm';
import { SignUpForm } from './SighUpform';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  if (!isAuthenticated()) {
    return <Navigate to='/login' />;
  }
  return children;
};

const App = () => {
  const { t } = useTranslation();
  return (
    <div style={{ padding: '20px' }}>
      <Routes>
        <Route path='/login' element={<LoginForm />} />
        <Route path='/signup' element={<SignUpForm />} />
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <div>
                <h1>{t('auth.welcome')}</h1>
              </div>
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};
export { App };
