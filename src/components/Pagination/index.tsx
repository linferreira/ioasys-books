import React, { useContext } from 'react';
import Image from 'next/image';
import { Button, Container, Text } from './styles';
import { BooksContext } from '../../contexts/BooksContext';

export const Pagination = () => {
  const { page, totalPages, updatePage } = useContext(BooksContext);

  function handleNextPage() {
    if (page < totalPages) {
      updatePage(page + 1);
    }
  }

  function handlePrevPage() {
    if (page <= totalPages) {
      updatePage(page - 1);
    }
  }

  return (
    <Container>
      <Text>
        Página <b>{page}</b> de <b>{totalPages}</b>
      </Text>
      <Button disabled={page === 1} onClick={handlePrevPage}>
        <Image
          src={`/assets/prev.svg`}
          width={32}
          height={32}
          alt="Prev icone"
        />
      </Button>

      <Button disabled={page === totalPages} onClick={handleNextPage}>
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
