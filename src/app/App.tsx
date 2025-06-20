import { Routes, Route } from 'react-router-dom';

import { ProfilePage } from '~/pages/ProfilePage/model/ProfilePage';
import { ROUTES } from '~/shared/constants/routes';
import { Sidebar } from '~/widgets/Sidebar';

import { LoginForm } from '../pages/LoginPage/model/LoginForm';
import { ProtectedRoute } from './providers/ProtectedRoute';

const App = () => {
  return (
    <div>
      <Sidebar />
      <Routes>
        <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
        <Route path={ROUTES.LOGIN} element={<LoginForm />} />
        {/* <Route path='/signup' element={<SignUpForm />} /> */}
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
