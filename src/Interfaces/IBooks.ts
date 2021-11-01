import { AxiosResponse } from 'axios';
import { UseMutationResult } from 'react-query';

export interface IBook {
  id: string;
  title: string;
  authors: string[];
  pageCount: number;
  publisher: string;
  published: number;
  imageUrl: string;
  description: string;
  language: string;
  isbn10: string;
  isbn13: string;
}

export interface IImageUrl {
  urlImg: string;
}

export interface IUserContextInterface {
  userName: string;
  userGender: string;
  isLoading: boolean;
  error: string;
  logout: () => void;
  loginMutation: UseMutationResult<AxiosResponse>;
}

export interface IBookContextInterface {
  booksList: IBook[];
  bookDetails: IBook;
  isLoading: boolean;
  page: number;
  totalPages: number;
  error: string;
  updateTotalPages: (total: number) => void;
  updatePage: (page: number) => void;
  loadBookMutation: UseMutationResult<AxiosResponse>;
}

export interface ILogin {
  email: string;
  password: string;
}
