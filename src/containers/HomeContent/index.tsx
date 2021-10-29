import { useRouter } from 'next/router';

import React, { useEffect, useState } from 'react';
import { Background } from '../../components/Background';
import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import { Loading } from '../../components/Loading';
import { ModalContent } from '../../components/Modal';
import { BOOKS_GET } from '../../config/app-config';
import { IBook } from '../../Interfaces/IBooks';
import { CardContainer } from './styles';
const img = '/assets/home-background.png';

export const HomeContent = () => {
  const Router = useRouter();
  const [verified, setVerified] = useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<IBook[]>([]);

  async function loadBooks() {
    try {
      setIsLoading(true);

      const token = localStorage.getItem('@ioasys-books-token');
      const { url, options } = BOOKS_GET(1, token);
      const tokenRes = await fetch(url, options);
      const res = await tokenRes.json();

      setData(res.data);

      if (!tokenRes.ok) {
        throw new Error(`Error: ${tokenRes.statusText}`);
      }
    } catch (err) {
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    const accessToken = localStorage.getItem('@ioasys-books-token');
    if (!accessToken) {
      setVerified(false);
      Router.replace('/');
    } else {
      setVerified(true);
      loadBooks();
    }
  }, []);

  const openModal = () => setShowModal(true);

  const closeModal = () => setShowModal(false);

  if (verified) {
    return (
      <>
        <Background urlImg={img}>
          <Header />
          <CardContainer>
            {data.length &&
              data.map((item) => {
                return <Card book={item} openModal={openModal} key={item.id} />;
              })}
          </CardContainer>
          <ModalContent showModal={showModal} closeModal={closeModal} />
        </Background>
        {isLoading && <Loading />}
      </>
    );
  } else {
    return null;
  }
};
