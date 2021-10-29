import React from 'react';
import { Arrow, Box, Container } from './styles';

export const TextError = ({ message }) => {
  return (
    <Container>
      <Arrow />
      <Box>{message}</Box>
    </Container>
  );
};
