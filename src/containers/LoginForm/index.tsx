import React from 'react';
import { Background } from '../../components/Background';
import { Input } from '../../components/Form/Input';
import Image from 'next/image';
import { Container, Content } from './styles';
import { Logo } from '../../components/Logo';
const img = '/assets/login-background.png'

export const LoginForm = () => {
  return (
    <>
      <Background urlImg={img}>
        <Content>
          <Logo color='white' />

          <Container>
            <Input label="Email" type="email" name="email" />
            <Input
              label="Senha"
              type="password"
              hasButton={true}
              name="password"
              buttonTitle="Entrar"
            />
          </Container>
        </Content>
      </Background>
    </>
  );
};
