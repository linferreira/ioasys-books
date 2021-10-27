import React from 'react';
import {
  BookTitle,
  Container,
  Image,
  AuthorTitle,
  BookInfos,
} from './styles';

const data = {
  title: 'Crossing the Chasm',
  authors: ['Geoffrey A. Moore'],
  totalPages: 150,
  publisher: 'Editora Loyola',
  published: 2020,
};

export const Card = () => {
  return (
    <Container>
      <Image src="/assets/login-background.png" />

      <div>
        <BookTitle>{data.title}</BookTitle>
        {data.authors.map((author) => (
          <AuthorTitle> {author}</AuthorTitle>
        ))}
        <BookInfos>
          {data.totalPages} páginas
          {data.publisher}
          Publicado em {data.published}
        </BookInfos>
      </div>
    </Container>
  );
};
