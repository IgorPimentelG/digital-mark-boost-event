import { usePathname, useRouter } from 'next/navigation';
import { FC } from 'react';

import { Button, Label } from '@/core/components/ui';
import { Container } from './styles';

type Props = {
  subject: string;
  content: string;
  createdAt?: string;
}

export const CardMail: FC<Props> = ({ subject, content, createdAt }) => {

  const router = useRouter();
  const pathname = usePathname();
  const eventId = pathname.split('/')[2];

  return (
    <Container title={subject}>
      <div>
        <div>
          <Label text='Criado em' />
          <span>{new Date(createdAt!).toLocaleDateString('pt-BR')}</span>
        </div>

        <div>
          <Label text='Título' />
          <span>{subject}</span>
        </div>
      </div>
      <hr />

      <Button label='Ver' styleType='SECONDARY' onClick={() =>
        router.push(`/email-editor?eventId=${eventId}&markdown=${encodeURIComponent(content)}`)
      } />
    </Container>
  );
};