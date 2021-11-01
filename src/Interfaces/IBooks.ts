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

export interface IContextInterface {
  userName: string;
  userGender: string;
  isLoading: boolean;
  page: number;
  totalPages: number;
  error: string;
  updateTotalPages: (total: number) => void;
  updatePage: (page: number) => void;
  logout: () => void;
  loginMutation: UseMutationResult<AxiosResponse>
}

export interface ILogin {
  email: string;
  password: string;
}
