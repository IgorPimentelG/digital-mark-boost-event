import { FC, ReactNode } from 'react';
import { Container } from './styles';

type Props = {
  message: string;
  icon?: ReactNode;
}

export const WarnMessage: FC<Props> = ({ message, icon }) => {
  return (
    <Container>
      {icon}
      <span>{message}</span>
    </Container>
  );
};