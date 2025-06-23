import { Routes, Route } from 'react-router-dom';

import { Error403Page } from '~/pages/ErrorPages/Error403/Error403';
import { ProfilePage } from '~/pages/ProfilePage/model/ProfilePage';
import { ROUTES } from '~/shared/constants/routes';
import { Sidebar } from '~/widgets/Sidebar';

import { LoginForm } from '../pages/LoginPage/model/LoginForm';
import { ProtectedRoute } from './providers/ProtectedRoute';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
        <Route path={ROUTES.LOGIN} element={<LoginForm />} />
        <Route path={ROUTES.ERROR403} element={<Error403Page />} />
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <div />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};
export { App };
