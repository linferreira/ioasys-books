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
import { UserContext } from '../../contexts/UserContext';
import { CardContainer } from './styles';

const img = '/assets/home-background.png';

export const HomeContent = () => {
  const Router = useRouter();

  const [verified, setVerified] = useState(false);

  const {
    isLoading,
    booksList,
    bookDetails,
    error,
    loadBooksMutation,
    loadBookDetailsMutation,
    showModal,
    hadleShowModal,
  } = useContext(BooksContext);

  const { currentPage } = useContext(UserContext);

  function loadBookDetails(id: string) {
    loadBookDetailsMutation.mutate(id);
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
    loadBooksMutation.mutate(currentPage);
  }, [currentPage]);

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
                  {!!booksList &&
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
                  closeModal={hadleShowModal}
                  book={bookDetails}
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
