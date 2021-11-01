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
    login: (data: ILogin) => http.post('/auth/sign-in', data),
  },
};

export default api;

export function BOOKS_GET(page: number, token: string) {
  return {
    url: `${API_URL}/books?page=${page}&amount=12" `,
    options: {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token} `,
      },
    },
  };
}

export function BOOKSDETAILS_GET(id: string, token: string) {
  return {
    url: `${API_URL}/books/${id} `,
    options: {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token} `,
      },
    },
  };
}
