'use client';

import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { FiSearch } from 'react-icons/fi';

import { CardEvent } from '@/core/components/layout';
import { Button, Logo, WarnMessage } from '@/core/components/ui';
import { useAuth } from '@/core/hooks/useAuth';
import { useAuthContext } from '@/core/shared/context/auth-provider';
import { Event } from '@/core/shared/models';
import { Container, Header, List, Title } from './styles';

type Props = {
  eventsInProgress: Event[],
  eventsExpired: Event[]
}

export const EventsTemplate: FC<Props> = ({ eventsInProgress, eventsExpired }) => {

  useAuth();

  const router = useRouter();
  const { logout } = useAuthContext();

  function handleLogout() {
    logout();
    router.push('/sign-in');
  }

  return (
    <Container>
      <Header>
        <Logo />
        <div>
          <Button
            label='Novo Evento'
            styleType='SECONDARY'
            onClick={() => router.push('/register-event')}
          />
          <Button label='Sair' styleType='SECONDARY' onClick={handleLogout} />
        </div>
      </Header>

      <div>
        <Title>Eventos Disponíveis</Title>
        <List>
          {eventsInProgress.length === 0 ? (
            <WarnMessage
              message='Nenhum evento foi encontrado.'
              icon={<FiSearch />}
            />
          ) : (
            <>
              {eventsInProgress.map(item => (
                <CardEvent key={item.id} {...item} />
              ))}
            </>
          )}
        </List>

        <Title>Eventos Expirados</Title>
        <List>
          {eventsExpired.length === 0 ? (
            <WarnMessage
              message='Nenhum evento expirado foi encontrado.'
              icon={<FiSearch />}
            />
          ) : (
            <>
              {eventsExpired.map(item => (
                <CardEvent key={item.id} {...item} />
              ))}
            </>
          )}
        </List>
      </div>
    </Container>
  );
};