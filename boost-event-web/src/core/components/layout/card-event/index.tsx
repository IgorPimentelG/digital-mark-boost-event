import { FC } from 'react';

import { Button } from '@/core/components/ui';
import { Container, Info, Label } from './styles';

type Props = {
  id: string;
  title: string;
  segment: string;
  dateAndTime: string;
  totalOfEmails: number;
}

export const CardEvent: FC<Props> = ({
  id,
  title,
  segment,
  dateAndTime,
  totalOfEmails
}) => {
  return (
    <Container>
      <div>
        <Info>
          <Label>Título</Label>
          <span>{title}</span>
        </Info>

        <Info>
          <Label>Segmento</Label>
          <span>{segment}</span>
        </Info>

        <Info>
          <Label>Data e hora</Label>
          <span>{dateAndTime}</span>
        </Info>

        <Info>
          <Label>Total de emails</Label>
          <span>{totalOfEmails}</span>
        </Info>
      </div>

      <Button label='Gerenciar' />
    </Container>
  );
};