import React from 'react';
import { Content } from './styles';

export const Background = ({ children, urlImg }) => {
  return (
      <Content urlImg={urlImg}>{children}</Content>
  );
};
