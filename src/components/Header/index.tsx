import React from 'react';
import { Button, Container, UserName, Wrapper } from './styles';
import Image from 'next/image';
import { Logo } from '../Logo';
import { useRouter } from 'next/router';

export const Header = () => {
  const Router = useRouter();

  const logout = () => {
    localStorage.removeItem('@ioasys-books-token');
    Router.replace('/');
  };

  return (
    <Container>
      <Logo color="black" />

      <Wrapper>
        <p>Bem-Vindo,</p> <UserName>Guilherme</UserName>
        <Button onClick={logout}>
          <Image
            src={`/assets/logout.svg`}
            width={32}
            height={32}
            alt="Logout icone"
          />
        </Button>
      </Wrapper>
    </Container>
  );
};
