import { ILogin } from '../Interfaces/IBooks';

export const API_URL = 'https://books.ioasys.com.br/api/v1';

export function TOKEN_POST(body: ILogin) {
  return {
    url: `${API_URL}/auth/sign-in `,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

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
