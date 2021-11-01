import { useRouter } from 'next/router';
import React, { createContext, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { IUserContextInterface, ILogin } from '../Interfaces/IBooks';
import api from '../services/api';

export const UserContext = createContext<IUserContextInterface | null>(null);

interface IUserStorageProps {
  children: JSX.Element;
}

export const UserStorage = ({ children }: IUserStorageProps) => {
  const Router = useRouter();

  const [userName, setUserName] = useState('');
  const [userGender, setUserGender] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState('');

  const loginMutation = useMutation(
    (data: ILogin) => {
      setIsLoading(true);

      return api.user.USER_LOGIN(data);
    },
    {
      onError: (error, variables, context) => {
        setError(
          error?.response?.data?.errors?.message ||
            'Infelizmente, algo deu errado.',
        );
        setIsLoading(false);
      },
      onSuccess: (result, variables, context) => {
        const token = result.headers.authorization;
        localStorage.setItem('@ioasys-books-token', token);

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
    <UserContext.Provider
      value={{
        userName,
        isLoading,
        error,
        userGender,
        logout,
        loginMutation,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
