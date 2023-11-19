import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { Container, Spinner } from './styles';

export const Loader = () => {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? createPortal(
    <Container>
      <Spinner />
    </Container>,
    document.body) : null;
}