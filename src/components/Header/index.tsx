import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { BooksContext } from '../../contexts/BooksContext';
import { Logo } from '../Logo';
import { Button, Container, UserName, Wrapper } from './styles';

export const Header = () => {
  const Router = useRouter();
  const { userName, userGender } = useContext(BooksContext);

  const logout = () => {
    localStorage.removeItem('@ioasys-books-token');
    Router.replace('/');
  };

  return (
    <Container>
      <Logo color="black" />

      <Wrapper>
        <p>{userGender === 'M' ? 'Bem-Vindo,' : 'Bem-Vinda,'}</p>{' '}
        <UserName>{userName}!</UserName>
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
