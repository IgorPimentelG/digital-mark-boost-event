'use client';

import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { LuMailSearch } from 'react-icons/lu';

import { CardEvent, CardMail } from '@/core/components/layout';
import { Button, Logo, WarnMessage } from '@/core/components/ui';
import { useAuth } from '@/core/hooks/useAuth';
import { Email, Event } from '@/core/shared/models';
import { Container, Content, Header, List } from './styles';

type Props = {
  emails: Email[];
  event: Event;
}

export const EventDetailsTemplate: FC<Props> = ({ emails, event }) => {

  useAuth();

  const router = useRouter();

  return (
    <Container>
      <Header>
        <Logo />
        <div>
          <Button
            label='Novo Email'
            styleType='SECONDARY'
            onClick={() => router.push(`/email-editor?eventId=${event.id}`)}
          />
          <Button label='Voltar' styleType='SECONDARY' onClick={() => router.push('/events')} />
        </div>
      </Header>

      <Content>
        <List>
          <h2>E-mails do Evento</h2>

          {emails.length === 0 ? (
            <div>
              <WarnMessage message='Não há nenhuma mensagem registrada' icon={<LuMailSearch />} />
            </div>
          ) : (
            <div>
              {emails.map(item => (
                <CardMail key={item.id} {...item} />
              ))}
            </div>
          )}
        </List>

        <div>
          <CardEvent {...event} showAction={false} />
        </div>
      </Content>
    </Container>
  );
};
