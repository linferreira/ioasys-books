import React, { createContext, useState } from 'react';
import { useMutation } from 'react-query';
import { IBook, IBookContextInterface } from '../Interfaces/book';
import api from '../services/api';

export const BooksContext = createContext<IBookContextInterface | null>(null);

interface IBookStorageProps {
  children: JSX.Element;
}

export const BooksStorage = ({ children }: IBookStorageProps) => {
  const [booksList, setBooksList] = useState<IBook[]>();
  const [bookDetails, setBookDetails] = useState<IBook>();
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);

  const loadBooksMutation = useMutation(
    (page: number) => api.books.BOOKS_GET(page),
    {
      onError: (error, variables, context) => {
        setError(
          error?.response?.data?.errors?.message ||
            'Infelizmente, algo deu errado.',
        );
        setIsLoading(false);
      },
      onSuccess: (result, variables, context) => {
        setBooksList(result.data.data);
        updateTotalPages(Math.round(result.data.totalPages));

        setIsLoading(false);
      },
    },
  );

  const loadBookDetailsMutation = useMutation(
    (id: string) => api.books.BOOKSDETAILS_GET(id),
    {
      onError: (error, variables, context) => {
        setError(
          error?.response?.data?.errors?.message ||
            'Infelizmente, algo deu errado.',
        );
        hadleShowModal(false);
        setIsLoading(false);
      },
      onSuccess: (result, variables, context) => {
        setBookDetails(result.data);
        hadleShowModal(true);
        setIsLoading(false);
      },
    },
  );

  function hadleShowModal(isOpen: boolean) {
    setShowModal(isOpen);
  }

  function updateTotalPages(total: number) {
    setTotalPages(total);
  }

  return (
    <BooksContext.Provider
      value={{
        isLoading,
        totalPages,
        error,
        updateTotalPages,
        booksList,
        bookDetails,
        loadBooksMutation,
        loadBookDetailsMutation,
        showModal,
        hadleShowModal,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};
