import { Credentials, NewUser } from '@/core/shared/models';
import { api } from '../api';

export const authAPI = () => {

  async function signIn(credentials: Credentials) {
    return api.post('/auth/sign-in', credentials);
  }

  async function signUp(data: NewUser) {
    return api.post('/auth/sign-up', data);
  }

  return { signIn, signUp };
};