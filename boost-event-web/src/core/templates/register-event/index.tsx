'use client';

import { FC } from 'react';

import { Button, Input, InputTextarea, Logo } from '@/core/components/ui';
import { Container, Content, Header, Row } from './styles';

export const RegisterEventTemplate: FC = () => {
  return (
    <Container>
      <Header>
        <Logo />
        <Button label='Voltar' styleType='SECONDARY' />
      </Header>

      <Content>
        <form>
          <h2>Cadastrar Evento</h2>

          <Input label='Nome' placeholder='Ex.: Semana Full Stack' />
          <InputTextarea 
            label='Descrição' 
            placeholder='Ex.: Treinamentos em JS' 
            rows={5} 
          />
          <Row>
            <Input label='Segmento' placeholder='Ex.: Tecnologia' />
            <Input label='Local' placeholder='Ex.: Teatro municipal' />
          </Row>
          <Row>
            <Input label='Capacidade' type='number' placeholder='Ex.: 50' />
            <Input
              label='Data e hora'
              mask='99/99/9999 - 99:99'
              placeholder='Ex.: 01/01/2023 12:00'
            />
          </Row>

          <Button label='Cadastrar' />
        </form>
      </Content>
    </Container>
  );
}