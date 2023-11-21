import axios from 'axios';
import Cookie from 'js-cookie';

export const api = axios.create({
  baseURL: process.env.API_BASE_URL
});

api.interceptors.request.use((config) => {
  const publicRoutes = ['sign-in', 'sign-up'];
  const currentUrl = config.url || '';
  const pathname = currentUrl.split('/')[2];

  const accessToken = Cookie.get('accessToken');
  config.headers['Content-Type'] = 'application/json';

  if (accessToken && !publicRoutes.includes(pathname)) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
}, (error) => {
  return Promise.reject(error);
});