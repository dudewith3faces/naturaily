import { useEffect } from 'react';
import { getUserDetails } from './api';
import { Dispatches } from '../store';
import { CookieService } from '.';

export const DashboardService = () => {
  const { getToken } = CookieService();
  const token = getToken();

  const { addUserDetails } = Dispatches();
  useEffect(() => {
    getUserDetails(token).then((data) => {
      addUserDetails(data);
    });
  }, [token, addUserDetails]);
  return;
};
