import React from 'react';
import {
  AuthorTitle, BookImage,
  BookTitle, InfoItems, InfosContainer, InfosWrapper, InfoTitle, InfoTitles, Wrapper
} from './styles';
import Image from 'next/image';

const data = {
  id: '8f41b92c7460b9337660427e',
  title: 'A Culpa é das Estrelas',
  description:
    'Hazel foi diagnosticada com câncer aos treze anos e agora, aos dezesseis, sobrevive graças a uma droga revolucionária que detém a metástase em seus pulmões. Ela sabe que sua doença é terminal e passa os dias vendo tevê e lendo Uma aflição imperial, livro cujo autor deixou muitas perguntas sem resposta. ',
  authors: ['Jonh Green'],
  pageCount: 288,
  category: 'Romance',
  imageUrl: 'https://files-books.ioasys.com.br/Book-0.jpg',
  isbn10: '0062856626',
  isbn13: '978-0062856623',
  language: 'Inglês',
  publisher: 'Intrínseca',
  published: 2002,
};

export const BookInfos = () => {
  return (
    <Wrapper>
      <BookImage src={data.imageUrl} />
      <div>
        <BookTitle>{data.title}</BookTitle>
          <AuthorTitle > {data.authors.join(', ')}</AuthorTitle>

        <InfoTitle> Informações</InfoTitle>
        <InfosWrapper>
          <InfosContainer>
            <InfoTitles>Páginas</InfoTitles>
            <InfoItems>{data.pageCount}</InfoItems>
          </InfosContainer>

          <InfosContainer>
            <InfoTitles>Editora</InfoTitles>
            <InfoItems>{data.publisher}</InfoItems>
          </InfosContainer>

          <InfosContainer>
            <InfoTitles>Publicação</InfoTitles>
            <InfoItems>{data.published}</InfoItems>
          </InfosContainer>

          <InfosContainer>
            <InfoTitles>Idioma</InfoTitles>
            <InfoItems>{data.language}</InfoItems>
          </InfosContainer>

          <InfosContainer>
            <InfoTitles>Título Original</InfoTitles>
            <InfoItems>{data.title}</InfoItems>
          </InfosContainer>

          <InfosContainer>
            <InfoTitles>ISBN-10</InfoTitles>
            <InfoItems>{data.isbn10}</InfoItems>
          </InfosContainer>

          <InfosContainer>
            <InfoTitles>ISBN-13</InfoTitles>
            <InfoItems>{data.isbn13}</InfoItems>
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
          {data.description}
        </InfoItems>
      </div>
    </Wrapper>
  );
};
