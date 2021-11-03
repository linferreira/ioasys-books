import { ILogin } from './../Interfaces/IBooks';

export const API_URL = 'https://books.ioasys.com.br/api/v1';

import axios from 'axios';

const http = axios.create({
  baseURL: API_URL,
});

http.interceptors.request.use((config) => {
  const user_token = localStorage.getItem('@ioasys-books-token');

  if (user_token) {
    config.headers['authorization'] = `Bearer ${user_token}`;
  }

  if (config.method === 'POST' || config.method === 'PUT') {
    config.headers['Content-Type'] = 'application/json; charset=UTF-8';
  }

  return config;
});

const api = {
  user: {
    USER_LOGIN: (data: ILogin) => http.post('/auth/sign-in', data),
  },
  books: {
    BOOKS_GET: (page: number) => http.get(`/books?page=${page}&amount=12`),
    BOOKSDETAILS_GET: (id: string) => http.get(`/books/${id} `),
  },
};

export default api;
