'use client';

import { yupResolver } from "@hookform/resolvers/yup";
import { AxiosError } from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PiCheckSquareDuotone, PiWarningDuotone } from 'react-icons/pi';

import { SignUpCover } from '@/core/assets';
import { Modal } from '@/core/components/layout';
import { Button, Input, Loader, Logo } from '@/core/components/ui';
import { NewUser } from '@/core/shared/models';
import { SignUpSchema } from '@/core/shared/schemas';
import { authAPI } from '@/core/shared/services/auth';
import { Container, Content, Footer, Form, Header } from './styles';

const DEFAUL_MODAL_MESSAGE = {
  title: '',
  message: '',
  hasError: false
};

export const SignUpTemplate = () => {

  const router = useRouter();
  const { signUp } = authAPI();

  const { control, handleSubmit } = useForm<NewUser>({
    shouldFocusError: false,
    resolver: yupResolver(SignUpSchema)
  });

  const [isLoading, setIsLoading] = useState(false);
  const [modalMessage, setModalMessage] = useState(DEFAUL_MODAL_MESSAGE);

  async function handleSignUp(data: NewUser) {
    setIsLoading(true);

    try {
      await signUp(data);
      setModalMessage({
        title: 'Bem-vindo',
        message: 'Seu cadastrado foi realizado com sucesso.',
        hasError: false
      });
    } catch (error) {
      const httpError = error as AxiosError;
      const data = httpError.response?.data as { message: '' };
      setModalMessage({
        title: 'Não foi possível se registrar',
        message: data?.message || httpError.message,
        hasError: true
      });
    }

    setIsLoading(false);
  }

  return (
    <Container>
      <div>
        <Image src={SignUpCover} alt='imagem ilustrativa' loading='eager' />
      </div>

      <Content>
        <Logo />
        <div>
          <div>
            <Header>
              <h2>Cadastra-se</h2>
              <span>Registre sua conta</span>
            </Header>

            <Form onSubmit={handleSubmit(handleSignUp)}>
              <Input
                name="name"
                label='Nome'
                placeholder='Ex.: husky'
                control={control}
              />
              <Input
                name='whatsapp'
                label='Whatsapp'
                placeholder='Ex.: (00) 00000-0000'
                mask='(99) 99999-9999'
                control={control}
              />
              <Input
                name='email'
                label='Email'
                type='email'
                placeholder='Ex.: exemplo@mail.com'
                control={control}
              />
              <Input
                name='password'
                label='Senha'
                type='password'
                placeholder='Min. 8 caracteres'
                control={control}
              />
              <Button label='Cadastrar' />
            </Form>

            <Footer>
              <span>Já está registrado?</span>
              <Button
                label='Entrar'
                styleType='SECONDARY'
                onClick={() => router.push('/sign-in')}
              />
            </Footer>
          </div>
        </div>
      </Content>

      {isLoading && <Loader />}
      {modalMessage.message && (
        <Modal
          icon={modalMessage.hasError ? <PiWarningDuotone /> : <PiCheckSquareDuotone />}
          title={modalMessage.title}
          message={modalMessage.message}
          onClose={() => modalMessage.hasError ?
            setModalMessage(DEFAUL_MODAL_MESSAGE) : router.push('/sign-in')}
        />
      )}
    </Container>
  );
};