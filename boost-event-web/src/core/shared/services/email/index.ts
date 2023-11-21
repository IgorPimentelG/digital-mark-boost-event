import { Email } from '@/core/shared/models';
import { api } from '../api';

export const emailAPI = () => {

  function register(data: Email, eventId: string) {
    return api.post('/email/v1/register', data, {
      params: {
        eventId
      }
    });
  }

  function find(id: string) {
    return api.get(`/email/v1/find/${id}`);
  }

  function findAll() {
    return api.get('/email/v1/list');
  }

  return { register, find, findAll };
}