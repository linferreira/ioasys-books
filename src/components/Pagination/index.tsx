import Image from 'next/image';
import React, { useContext } from 'react';
import { BooksContext } from '../../contexts/BooksContext';
import { UserContext } from '../../contexts/UserContext';
import { Button, Container, Text } from './styles';

export const Pagination = () => {
  const { totalPages } = useContext(BooksContext);
  const { currentPage, updateCurrentPage } = useContext(UserContext);

  function handleNextPage() {
    if (currentPage < totalPages) {
      updateCurrentPage(currentPage + 1);
    }
  }

  function handlePrevPage() {
    if (currentPage <= totalPages) {
      updateCurrentPage(currentPage - 1);
    }
  }

  return (
    <Container>
      <Text>
        Página <b>{currentPage}</b> de <b>{totalPages}</b>
      </Text>
      <Button disabled={currentPage === 1} onClick={handlePrevPage}>
        <Image
          src={`/assets/prev.svg`}
          width={32}
          height={32}
          alt="Prev icone"
        />
      </Button>

      <Button disabled={currentPage === totalPages} onClick={handleNextPage}>
        <Image
          src={`/assets/next.svg`}
          width={32}
          height={32}
          alt="Next icone"
        />
      </Button>
    </Container>
  );
};
