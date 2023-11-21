import { FC } from 'react';

import { Button, Label } from '@/core/components/ui';
import { useRouter } from 'next/navigation';
import { ActionWrap, Container, Info } from './styles';

type Props = {
  id?: string;
  name: string;
  segment: string;
  local?: string;
  capacity?: number;
  description?: string;
  occursAt: string;
  showAction?: boolean;
}

export const CardEvent: FC<Props> = ({
  id,
  name,
  segment,
  occursAt,
  local,
  capacity,
  description,
  showAction = true
}) => {

  const router = useRouter();

  return (
    <Container>
      <div>
        <Info>
          <Label text='Título' />
          <span>{name}</span>
        </Info>

        <Info>
          <Label text='Segmento' />
          <span>{segment}</span>
        </Info>

        <Info>
          <Label text='Data e hora' />
          <span>{
            new Date(occursAt).toLocaleDateString('pt-BR', { hour: '2-digit', minute: '2-digit' })
          }</span>
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

        {description && (
          <Info>
            <Label text='Descrição' />
            <span>{description}</span>
          </Info>
        )}
      </div>

      {showAction && (
        <ActionWrap>
          <Button label='Gerenciar' onClick={() => router.push(`/events/${id}`)} />
        </ActionWrap>
      )}
    </Container>
  );
};