"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { SignInCover } from '@/core/assets';
import { Button, Input, Logo } from '@/core/components/ui';
import { Container, Content, Footer, Form, Header } from './styles';

export const SignInTemplate = () => {

  const router = useRouter();

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

            <Form>
              <Input label='Email' type='email' placeholder='Insira seu e-mail' />
              <Input label='Senha' type='password' placeholder='Insira sua senha' />
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
    </Container>
  );
};