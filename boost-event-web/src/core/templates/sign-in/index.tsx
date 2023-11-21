'use client';

import { yupResolver } from "@hookform/resolvers/yup";
import { AxiosError } from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PiWarningDuotone } from 'react-icons/pi';

import { SignInCover } from '@/core/assets';
import { Modal } from '@/core/components/layout';
import { Button, Input, Loader, Logo } from '@/core/components/ui';
import { useAuthContext } from '@/core/shared/context/auth-provider';
import { Credentials } from '@/core/shared/models/credentials';
import { SignInSchema } from '@/core/shared/schemas';
import { authAPI } from '@/core/shared/services/auth';
import { Container, Content, Footer, Form, Header } from './styles';

export const SignInTemplate = () => {

  const router = useRouter();
  const { login } = useAuthContext();
  const { signIn } = authAPI();

  const { control, handleSubmit } = useForm<Credentials>({
    shouldFocusError: false,
    resolver: yupResolver(SignInSchema)
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSignIn(data: Credentials) {
    setIsLoading(true);

    try {
      const response = await signIn(data);
      login(response.data);
      router.push('/home');
    } catch (error) {
      const httpError = error as AxiosError;
      const data = httpError.response?.data as { message: '' };
      setErrorMessage(data.message || httpError.message);
    }

    setIsLoading(false);
  }

  return (
    <Container>
      <Content>
        <Logo />
        <div>
          <div>
            <Header>
              <h2>Seja Bem-Vindo</h2>
              <span>Acesse sua conta</span>
            </Header>

            <Form onSubmit={handleSubmit(handleSignIn)}>
              <Input
                name="email"
                label='Email'
                type='email'
                placeholder='Insira seu e-mail'
                control={control}
              />
              <Input
                name='password'
                label='Senha'
                type='password'
                placeholder='Insira sua senha'
                control={control}
              />
              <Button label='Entrar' />
            </Form>

            <Footer>
              <span>Ainda não tem conta?</span>
              <Button
                label='Cadastra-se'
                styleType='SECONDARY'
                onClick={() => router.push('/sign-up')}
              />
            </Footer>
          </div>
        </div>
      </Content>

      <div>
        <Image src={SignInCover} alt='imagem ilustrativa' loading='eager' />
      </div>

      {isLoading && <Loader />}
      {errorMessage && (
        <Modal
          icon={<PiWarningDuotone />}
          title='Não foi possível acessar o sistema'
          message={errorMessage}
          onClose={() => setErrorMessage('')}
        />
      )}
    </Container>
  );
};