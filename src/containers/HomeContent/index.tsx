import React from 'react';
import { Background } from '../../components/Background';
import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import { CardContainer } from './styles';
const img = '/assets/home-background.png';

export const HomeContent = () => {
  return (
    <>
      <Background urlImg={img}>
        <Header />
        <CardContainer>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />

        </CardContainer>
      </Background>
    </>
  );
};
