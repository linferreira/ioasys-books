import React, { useContext } from 'react';
import { Button, Container, UserName, Wrapper } from './styles';
import Image from 'next/image';
import { Logo } from '../Logo';
import { useRouter } from 'next/router';
import { BooksContext } from '../../contexts/BooksContext';

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
