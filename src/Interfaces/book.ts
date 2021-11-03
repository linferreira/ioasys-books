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

export interface IBookContextInterface {
  booksList: IBook[];
  bookDetails: IBook;
  isLoading: boolean;
  totalPages: number;
  error: string;
  updateTotalPages: (total: number) => void;
  loadBooksMutation: UseMutationResult<AxiosResponse>;
  loadBookDetailsMutation: UseMutationResult<AxiosResponse>;
  hadleShowModal: (isOpen: boolean) => void;
  showModal: boolean;
}
