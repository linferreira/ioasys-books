import React from 'react';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { Content } from './styles';
const img = '/assets/home-background.png';

export const HomeContent = () => {
  return (
    <Content>
      <Background urlImg={img}>
        <Header />
      </Background>
    </Content>
  );
};
