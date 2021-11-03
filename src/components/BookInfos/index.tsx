import Image from 'next/image';
import React from 'react';
import { IBook } from '../../Interfaces/book';
import {
  AuthorTitle,
  BookImage,
  BookTitle,
  InfoItems,
  InfosContainer,
  InfosWrapper,
  InfoTitle,
  InfoTitles,
  Wrapper,
} from './styles';

const unknowImg = '/assets/unknow.svg';

interface IBookProps {
  book: IBook;
}

export const BookInfos = ({ book }: IBookProps) => {
  return (
    <Wrapper>
      <BookImage src={book.imageUrl ? book.imageUrl : unknowImg} />
      <div>
        <BookTitle>{book.title}</BookTitle>
        <AuthorTitle> {book.authors.join(', ')}</AuthorTitle>

        <InfoTitle> Informações</InfoTitle>
        <InfosWrapper>
          <InfosContainer>
            <InfoTitles>Páginas</InfoTitles>
            <InfoItems>{book.pageCount}</InfoItems>
          </InfosContainer>

          <InfosContainer>
            <InfoTitles>Editora</InfoTitles>
            <InfoItems>{book.publisher}</InfoItems>
          </InfosContainer>

          <InfosContainer>
            <InfoTitles>Publicação</InfoTitles>
            <InfoItems>{book.published}</InfoItems>
          </InfosContainer>

          <InfosContainer>
            <InfoTitles>Idioma</InfoTitles>
            <InfoItems>{book.language}</InfoItems>
          </InfosContainer>

          <InfosContainer>
            <InfoTitles>Título Original</InfoTitles>
            <InfoItems>{book.title}</InfoItems>
          </InfosContainer>

          <InfosContainer>
            <InfoTitles>ISBN-10</InfoTitles>
            <InfoItems>{book.isbn10}</InfoItems>
          </InfosContainer>

          <InfosContainer>
            <InfoTitles>ISBN-13</InfoTitles>
            <InfoItems>{book.isbn13}</InfoItems>
          </InfosContainer>
        </InfosWrapper>

        <InfoTitle> Resenha</InfoTitle>
        <InfoItems>
          <Image
            src={`/assets/quotes.svg`}
            width={19}
            height={14}
            alt="Logo ioasys"
          />
          {book.description}
        </InfoItems>
      </div>
    </Wrapper>
  );
};
