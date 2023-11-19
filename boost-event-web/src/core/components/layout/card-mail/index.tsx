import { FC } from 'react';

import { Button, Label } from '@/core/components/ui';
import { Container } from './styles';

type Props = {
  id: string;
  createdAt: string;
}

export const CardMail: FC<Props> = ({ id, createdAt }) => {
  return (
    <Container>
      <div>
        <Label text='Criado em' />
        <span>{createdAt}</span>
      </div>

      <hr />

      <Button label='Ver' styleType='SECONDARY' />
    </Container>
  );
};