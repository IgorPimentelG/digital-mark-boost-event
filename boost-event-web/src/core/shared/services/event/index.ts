import { Event } from '@/core/shared/models';
import { api } from '../api';

export const eventAPI = () => {

  function register(data: Event) {
    return api.post('/event/v1/register', data);
  }

  function find(id: string) {
    return api.get(`/event/v1/find/${id}`);
  }

  function findAll() {
    return api.get('/event/v1/list');
  }

  return { register, find, findAll };
};