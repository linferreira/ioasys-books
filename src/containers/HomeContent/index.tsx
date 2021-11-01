import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { Background } from '../../components/Background';
import { Card } from '../../components/Card';
import { TextError } from '../../components/Error';
import { Header } from '../../components/Header';
import { Loading } from '../../components/Loading';
import { ModalContent } from '../../components/Modal';
import { Pagination } from '../../components/Pagination';
import { BooksContext } from '../../contexts/BooksContext';
import { IBook } from '../../Interfaces/IBooks';
import { BOOKSDETAILS_GET } from '../../services/api';
import { CardContainer } from './styles';

const img = '/assets/home-background.png';

export const HomeContent = () => {
  const Router = useRouter();

  const [verified, setVerified] = useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [details, setDetails] = useState<IBook>();

  const {
    page,
    updateTotalPages,
    isLoading,
    booksList,
    bookDetails,
    error,
    loadBookMutation,
  } = useContext(BooksContext);

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  async function loadBookDetails(id: string) {
    try {
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
    }
  }, []);

  useEffect(() => {
    loadBookMutation.mutate(null);
  }, [page]);

  if (verified) {
    return (
      <>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {!!error ? (
              <TextError message={error} />
            ) : (
              <Background urlImg={img}>
                <Header />
                <CardContainer>
                  {booksList.length &&
                    booksList.map((item) => {
                      return (
                        <Card
                          book={item}
                          key={item.id}
                          loadDetails={loadBookDetails}
                        />
                      );
                    })}
                  <Pagination />
                </CardContainer>
                <ModalContent
                  showModal={showModal}
                  closeModal={closeModal}
                  book={details}
                />
              </Background>
            )}
          </>
        )}
      </>
    );
  } else {
    return null;
  }
};
