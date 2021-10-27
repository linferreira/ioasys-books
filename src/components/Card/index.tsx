import React from 'react';
import {
  BookTitle,
  Container,
  Image,
  AuthorTitle,
  BookInfos,
  InfosContainer,
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

      <InfosContainer>
        <BookTitle>{data.title}</BookTitle>
        {data.authors.map((author) => (
          <AuthorTitle> {author}</AuthorTitle>
        ))}
        <BookInfos>{data.totalPages} páginas</BookInfos>
        <BookInfos> {data.publisher}</BookInfos>
        <BookInfos> Publicado em {data.published}</BookInfos>
      </InfosContainer>
    </Container>
  );
};
