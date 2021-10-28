import React from 'react';
import { Background } from '../../components/Background';
import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import { Loading } from '../../components/Loading';
import { ModalContent } from '../../components/Modal';
import { CardContainer } from './styles';
const img = '/assets/home-background.png';

export const HomeContent = () => {
  const [showModal, setShowModal] = React.useState(false);

  const openModal = () => setShowModal(true);

  const closeModal = () => setShowModal(false);

  return (
    <>
      <Background urlImg={img}>
        {/* <Loading /> */}

        <Header />
        <CardContainer>
          <Card openModal={openModal} />
          <Card openModal={openModal} />
          <Card openModal={openModal} />
          <Card openModal={openModal} />
          <Card openModal={openModal} />
        </CardContainer>
        <ModalContent showModal={showModal} closeModal={closeModal} />
      </Background>
    </>
  );
};
