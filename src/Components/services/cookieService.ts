import { useCookies } from 'react-cookie';

export const CookieService = () => {
  const key = 'token';
  const [cookies, setCookie, removeCookie] = useCookies([key]);
  const setToken = (data: string) => {
    setCookie(key, data);
  };
  const getToken = () => cookies.token;
  const removeToken = () => removeCookie(key);

  return { setToken, getToken, removeToken };
};
