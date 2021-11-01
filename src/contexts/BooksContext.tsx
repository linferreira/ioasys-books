import { useRouter } from 'next/router';
import React, { createContext, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { IContextInterface, ILogin } from '../Interfaces/IBooks';
import api from '../services/api';

export const BooksContext = createContext<IContextInterface | null>(null);

interface IBookStoragProps {
  children: JSX.Element;
}

export const BooksStorage = ({ children }: IBookStoragProps) => {
  const Router = useRouter();

  const [userName, setUserName] = useState('');
  const [userGender, setUserGender] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState('');

  const queryClient = useQueryClient();

  const loginMutation = useMutation(
    (data: ILogin) => {
      setIsLoading(true);

      return api.user.login(data);
    },
    {
      onError: (error: any, variables, context) => {
        console.error(error);
        setError(error?.response?.data?.error || error);
        setIsLoading(false);
      },
      onSuccess: (result, variables, context) => {
        const token = result.headers.authorization;
        localStorage.setItem('@ioasys-books-token', token);

        queryClient.setQueryData('session', result.data);

        const name = result.data.name.split(' ');
        const gender = result.data.gender;
        setUserName(name[0]);
        setUserGender(gender);
        Router.push('/home');
        setIsLoading(false);
      },
    },
  );

  function updateTotalPages(total: number) {
    setTotalPages(total);
  }

  function updatePage(page: number) {
    setPage(page);
  }

  function logout() {
    setUserName('');
    setUserGender('');
    setPage(1);
    setTotalPages(1);
    setError('');
    localStorage.removeItem('@ioasys-books-token');
    Router.replace('/');
  }

  return (
    <BooksContext.Provider
      value={{
        userName,
        isLoading,
        page,
        totalPages,
        error,
        userGender,
        updateTotalPages,
        updatePage,
        logout,
        loginMutation,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};
