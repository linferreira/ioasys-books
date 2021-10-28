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
  imageUrl: "https://files-books.ioasys.com.br/Book-0.jpg"
};

export const Card = ({openModal}) => {

  return (
    <Container>
      <Image src={data.imageUrl} />

      <InfosContainer onClick={openModal}>
        <BookTitle>{data.title}</BookTitle>
        {data.authors.map((author, index) => (
          <AuthorTitle key={index.toString()}> {author}</AuthorTitle>
        ))}
        <BookInfos>{data.totalPages} páginas</BookInfos>
        <BookInfos> {data.publisher}</BookInfos>
        <BookInfos> Publicado em {data.published}</BookInfos>
      </InfosContainer>

    </Container>
  );
};
