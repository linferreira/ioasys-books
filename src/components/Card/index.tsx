import React from 'react';
import { IBook } from '../../Interfaces/book';
import {
  AuthorTitle,
  BookInfos,
  BookInfosContainer,
  BookTitle,
  Container,
  Image,
  InfosContainer,
} from './styles';

const unknowImg = '/assets/unknow.svg';

interface ICardProps {
  book: IBook;
  loadDetails: (id: string) => void;
}

export const Card = ({ book, loadDetails }: ICardProps) => {
  return (
    <Container onClick={() => loadDetails(book.id)}>
      <Image src={book.imageUrl ? book.imageUrl : unknowImg} />
      <InfosContainer>
        <BookTitle>{book.title}</BookTitle>
        <AuthorTitle> {book.authors.join(', ')}</AuthorTitle>
        <BookInfosContainer>
          <BookInfos>{book.pageCount} páginas</BookInfos>
          <BookInfos> Editora {book.publisher} </BookInfos>
          <BookInfos> Publicado em {book.published}</BookInfos>
        </BookInfosContainer>
      </InfosContainer>
    </Container>
  );
};
