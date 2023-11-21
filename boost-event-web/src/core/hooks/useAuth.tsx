import { redirect } from 'next/navigation';
import { useLayoutEffect } from 'react';

import { useAuthContext } from '../shared/context/auth-provider';

export const useAuth = () => {

  const { isAuthenticated } = useAuthContext();

  useLayoutEffect(() => {
    if (!isAuthenticated) {
      redirect('/');
    }
  }, [isAuthenticated]);
}