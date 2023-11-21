import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.API_BASE_URL
});

api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('accessToken');
  config.headers['Content-Type'] = 'application/json';

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
}, (error) => {
  return Promise.reject(error);
});