import React, { createContext, useState } from 'react';
import { useMutation } from 'react-query';
import { IBook, IBookContextInterface } from '../Interfaces/IBooks';
import api from '../services/api';

export const BooksContext = createContext<IBookContextInterface | null>(null);

interface IBookStorageProps {
  children: JSX.Element;
}

export const BooksStorage = ({ children }: IBookStorageProps) => {
  const [booksList, setBooksList] = useState<IBook[]>();
  const [bookDetails, setBookDetails] = useState<IBook>();
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState('');

  const loadBookMutation = useMutation(() => api.books.BOOKS_GET(page), {
    onError: (error, variables, context) => {
      setError(
        error?.response?.data?.errors?.message ||
          'Infelizmente, algo deu errado.',
      );
      setIsLoading(false);
    },
    onSuccess: (result, variables, context) => {
      setBooksList(result.data.data);
      console.log(result.data.data);
      updateTotalPages(Math.round(result.data.totalPages));

      setIsLoading(false);
    },
  });

  function updateTotalPages(total: number) {
    setTotalPages(total);
  }

  function updatePage(page: number) {
    setPage(page);
  }

  return (
    <BooksContext.Provider
      value={{
        isLoading,
        page,
        totalPages,
        error,
        updateTotalPages,
        updatePage,
        booksList,
        bookDetails,
        loadBookMutation
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};
