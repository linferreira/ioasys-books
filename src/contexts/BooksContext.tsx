import { useRouter } from 'next/router';
import React, { createContext, useState } from 'react';
import { TOKEN_POST } from '../config/app-config';
import { IContextInterface } from '../Interfaces/IBooks';

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

  async function userLogin(email: string, password: string) {
    try {
      setIsLoading(true);
      const { url, options } = TOKEN_POST({ email, password });
      const tokenRes = await fetch(url, options);
      const res = await tokenRes.json();
      if (!tokenRes.ok) {
        setError(res.errors.message);
        throw new Error(`Error: ${tokenRes.statusText}`);
      }

      const name = res.name.split(' ');

      setUserName(name[0]);
      setUserGender(res.gender);

      const token = tokenRes.headers.get('Authorization');

      localStorage.setItem('@ioasys-books-token', token);

      Router.push('/home');
    } catch (err) {
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <BooksContext.Provider
      value={{
        userName,
        isLoading,
        page,
        totalPages,
        error,
        userLogin,
        userGender,
        updateTotalPages,
        updatePage,
        logout,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};
