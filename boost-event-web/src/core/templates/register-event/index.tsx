'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { PiCheckSquareDuotone, PiWarningDuotone } from 'react-icons/pi';

import { Modal } from '@/core/components/layout';
import { Button, Input, InputTextarea, Loader, Logo } from '@/core/components/ui';
import { Event } from '@/core/shared/models';
import { EventSchema } from '@/core/shared/schemas';
import { eventAPI } from '@/core/shared/services/event';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { Container, Content, Header, Row } from './styles';

const DEFAUL_MODAL_MESSAGE = {
  title: '',
  message: '',
  hasError: false
};

export const RegisterEventTemplate: FC = () => {

  const router = useRouter();
  const { register } = eventAPI();

  const { control, handleSubmit } = useForm<Event>({
    shouldFocusError: false,
    resolver: yupResolver(EventSchema)
  });

  const [isLoading, setIsLoading] = useState(false);
  const [modalMessage, setModalMessage] = useState(DEFAUL_MODAL_MESSAGE);

  async function handleRgisterEvent(data: Event) {
    setIsLoading(true);

    try {
      await register(data);
      setModalMessage({
        title: 'Evento registrado',
        message: 'O evento foi registrado com sucesso.',
        hasError: false
      });
    } catch (error) {
      const httpError = error as AxiosError;
      const data = httpError.response?.data as { message: '' };
      setModalMessage({
        title: 'Não foi possível registrar o evento',
        message: data?.message || httpError.message,
        hasError: true
      });
    }

    setIsLoading(false);
  }

  return (
    <Container>
      <Header>
        <Logo />
        <Button label='Voltar' styleType='SECONDARY' onClick={() => router.push('/events')} />
      </Header>

      <Content>
        <form onSubmit={handleSubmit(handleRgisterEvent)}>
          <h2>Cadastrar Evento</h2>

          <Input
            name='name'
            label='Nome'
            placeholder='Ex.: Semana Full Stack'
            control={control}
          />
          <InputTextarea
            name='description'
            label='Descrição'
            placeholder='Ex.: Treinamentos em JS'
            rows={5}
            control={control}
          />
          <Row>
            <Input
              name='segment'
              label='Segmento'
              placeholder='Ex.: Tecnologia'
              control={control}
            />
            <Input
              name='local'
              label='Local'
              placeholder='Ex.: Teatro municipal'
              control={control}
            />
          </Row>
          <Row>
            <Input
              name='capacity'
              label='Capacidade'
              type='number'
              placeholder='Ex.: 50'
              control={control}
            />
            <Input
              name='occursAt'
              label='Data e hora'
              type='datetime-local'
              control={control}
            />
          </Row>

          <Button label='Cadastrar' />
        </form>
      </Content>

      {isLoading && <Loader />}
      {modalMessage.message && (
        <Modal
          icon={modalMessage.hasError ? <PiWarningDuotone /> : <PiCheckSquareDuotone />}
          title={modalMessage.title}
          message={modalMessage.message}
          onClose={() => modalMessage.hasError ?
            setModalMessage(DEFAUL_MODAL_MESSAGE) : router.replace('/events')}
        />
      )}
    </Container>
  );
}