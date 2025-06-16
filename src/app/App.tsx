import { useTranslation } from 'react-i18next';
import { Routes, Route } from 'react-router-dom';

import { SignUpForm } from '~/pages/RegisterPage/model/SighUpform';

import { LoginForm } from '../pages/LoginPage/model/LoginForm';
import { ProtectedRoute } from './providers/ProtectedRoute';

const App = () => {
  const { t } = useTranslation();
  return (
    <div>
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
