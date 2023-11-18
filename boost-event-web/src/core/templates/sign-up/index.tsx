"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { SignUpCover } from '@/core/assets';
import { Button, Input, Logo } from '@/core/components/ui';
import { Container, Content, Footer, Form, Header } from './styles';

export const SignUpTemplate = () => {

  const router = useRouter();

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

            <Form>
              <Input label='Nome' placeholder='Ex.: husky' />
              <Input label='Whatsapp' placeholder='Ex.: (00) 00000-0000' mask='(99) 99999-9999' />
              <Input label='Email' type='email' placeholder='Ex.: exemplo@mail.com' />
              <Input label='Senha' type='password' placeholder='Min. 8 caracteres' />
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
    </Container>
  );
};