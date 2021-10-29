import React from 'react';
import { IBook } from '../../Interfaces/IBooks';
import {
  BookTitle,
  Container,
  Image,
  AuthorTitle,
  BookInfos,
  InfosContainer,
  BookInfosContainer,
} from './styles';

interface ICardProps {
  book: IBook;
  loadDetails: (id:string) => void
}

export const Card = ({ book, loadDetails }: ICardProps) => {
  return (
    <Container onClick={() => loadDetails(book.id)}>
      <Image src={book.imageUrl} />
      <InfosContainer>
        <BookTitle>{book.title}</BookTitle>
        <AuthorTitle> {book.authors.join(', ')}</AuthorTitle>
        <BookInfosContainer>
          <BookInfos>{book.pageCount} páginas</BookInfos>
          <BookInfos> {book.publisher}</BookInfos>
          <BookInfos> Publicado em {book.published}</BookInfos>
        </BookInfosContainer>
      </InfosContainer>
    </Container>
  );
};
