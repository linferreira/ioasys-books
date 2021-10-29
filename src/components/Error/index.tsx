import React from 'react';
import { Container, Box, Arrow } from './styles';

export const TextError = ({ message }) => {
  return (
    <Container>
      <Arrow />
      <Box>{message}</Box>
    </Container>
  );
};
