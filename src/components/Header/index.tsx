import Image from 'next/image';
import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { Logo } from '../Logo';
import { Button, Container, UserName, Wrapper } from './styles';

export const Header = () => {
  const { userName, userGender, logout } = useContext(UserContext);

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
