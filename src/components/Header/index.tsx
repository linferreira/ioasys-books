import React from 'react';
import { Container } from './styles';
import Image from 'next/image';
import { Logo } from '../Logo';

export const Header = () => {
  return (
    <Container>
      <Logo color='black' />

      <p>Bem-Vindo</p>
    </Container>
  );
};
