import { FC } from 'react';

import { Button, Label } from '@/core/components/ui';
import { Container, Info } from './styles';

type Props = {
  id: string;
  title: string;
  segment: string;
  local?: string;
  capacity?: number;
  description?: string;
  dateAndTime: string;
  totalOfEmails: number;
  showAction?: boolean;
}

export const CardEvent: FC<Props> = ({
  id,
  title,
  segment,
  dateAndTime,
  local,
  capacity,
  description,
  totalOfEmails,
  showAction = true
}) => {
  return (
    <Container>
      <div>
        <Info>
          <Label text='Título' />
          <span>{title}</span>
        </Info>

        <Info>
          <Label text='Segmento' />
          <span>{segment}</span>
        </Info>

        <Info>
          <Label text='Data e hora' />
          <span>{dateAndTime}</span>
        </Info>

        {local && (
          <Info>
            <Label text='Local' />
            <span>{local}</span>
          </Info>
        )}

        {capacity && (
          <Info>
            <Label text='Capacidade' />
            <span>{capacity}</span>
          </Info>
        )}

        <Info>
          <Label text='Total de emails' />
          <span>{totalOfEmails}</span>
        </Info>

        {description && (
          <Info>
            <Label text='Descrição' />
            <span>{description}</span>
          </Info>
        )}
      </div>

      {showAction && <Button label='Gerenciar' />}
    </Container>
  );
};