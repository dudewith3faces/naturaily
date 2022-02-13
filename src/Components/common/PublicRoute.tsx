import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { Paths } from '../enums';
import { CookieService } from '../services';

export const PublicRoute = () => {
  const { getToken } = CookieService();
  const token = getToken();
  const { pathname } = useLocation();
  return token && pathname === Paths.LOGIN ? (
    <Navigate to={Paths.DASHBOARD} />
  ) : (
    <Outlet />
  );
};
