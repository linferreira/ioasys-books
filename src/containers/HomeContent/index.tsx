import { useRouter } from 'next/router';

import React, { useEffect, useState } from 'react';
import { Background } from '../../components/Background';
import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import { Loading } from '../../components/Loading';
import { ModalContent } from '../../components/Modal';
import { BOOKSDETAILS_GET, BOOKS_GET } from '../../config/app-config';
import { IBook } from '../../Interfaces/IBooks';
import { CardContainer } from './styles';
const img = '/assets/home-background.png';

export const HomeContent = () => {
  const Router = useRouter();
  const [verified, setVerified] = useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<IBook[]>([]);
  const [details, setDetails] = useState<IBook>();

  async function loadBooks() {
    try {
      setIsLoading(true);

      const token = localStorage.getItem('@ioasys-books-token');
      const { url, options } = BOOKS_GET(1, token);
      const booksRes = await fetch(url, options);
      const res = await booksRes.json();

      setData(res.data);

      if (!booksRes.ok) {
        throw new Error(`Error: ${booksRes.statusText}`);
      }
    } catch (err) {
    } finally {
      setIsLoading(false);
    }
  }

  async function loadBookDetails(id: string) {
    try {
      setIsLoading(true);

      const token = localStorage.getItem('@ioasys-books-token');
      const { url, options } = BOOKSDETAILS_GET(id, token);
      const bookRes = await fetch(url, options);
      const res = await bookRes.json();

      if (!bookRes.ok) {
        throw new Error(`Error: ${bookRes.statusText}`);
      }

      setDetails(res);
      openModal();
    } catch (err) {
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    const accessToken = localStorage.getItem('@ioasys-books-token');
    if (!accessToken) {
      localStorage.removeItem('@ioasys-books-token');
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
                return (
                  <Card
                    book={item}
                    key={item.id}
                    loadDetails={loadBookDetails}
                  />
                );
              })}
          </CardContainer>
          <ModalContent
            showModal={showModal}
            closeModal={closeModal}
            book={details}
          />
        </Background>
        {isLoading && <Loading />}
      </>
    );
  } else {
    return null;
  }
};
