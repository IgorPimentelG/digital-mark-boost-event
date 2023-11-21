import { FC, ReactNode } from 'react';

import { Button } from '@/core/components/ui';
import { Card, Container } from './styles';

type Props = {
  title: string;
  message: string;
  icon?: ReactNode;
  onClose: () => void;
}

export const Modal: FC<Props> = ({ title, message, icon, onClose }) => {
  return (
    <Container>
      <Card>
        {icon}
        <h3>{title}</h3>
        <p>{message}</p>
        <Button label='Fechar' onClick={onClose} />
      </Card>
    </Container>
  );
}