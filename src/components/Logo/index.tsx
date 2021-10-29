import React from 'react';
import { Title, Wrapper } from './styles';
import Image from 'next/image';

interface LogoProps {
  color: 'white' | 'black';
}

export const Logo = ({ color }: LogoProps) => {
  return (
    <Wrapper>
      <Image
        src={`/assets/logo-${color}.svg`}
        width={104.4}
        height={36}
        alt="Logo ioasys"
      />
      <Title color={color}>Books</Title>
    </Wrapper>
  );
};
