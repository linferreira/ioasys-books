import React from 'react';
import { Container, Box, Arrow } from './styles';
import Image from 'next/image';

export const TextError = ({ message }) => {
  return (
    <Container>
      <Arrow />
      <Box>{message}</Box>
    </Container>
  );
};
