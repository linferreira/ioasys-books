import React from 'react';
import { Background } from '../../components/Background';
import { Input } from '../../components/Form/Input';
import Image from 'next/image';
import { Title, Wrapper, Container, Content } from './styles';

export const LoginForm = () => {
  return (
    <>
      <Background>
        <Content>
          <Wrapper>
            <Image
              src="/assets/logo.svg"
              width={104.4}
              height={36}
              alt="Logo ioasys"
            />
            <Title>Books</Title>
          </Wrapper>

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
