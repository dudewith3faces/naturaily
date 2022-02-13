import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { Paths } from '../enums';
import { CookieService } from '../services';

export const PrivateRoute = () => {
  const { getToken } = CookieService();
  const token = getToken();
  const { pathname } = useLocation();
  return !token && pathname === Paths.DASHBOARD ? (
    <Navigate to={Paths.LOGIN} />
  ) : (
    <Outlet />
  );
};
