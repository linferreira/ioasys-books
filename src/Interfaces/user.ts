import { AxiosResponse } from 'axios';
import { UseMutationResult } from 'react-query';

export interface ILogin {
  email: string;
  password: string;
}

export interface IUserContextInterface {
  userName: string;
  userGender: string;
  isLoading: boolean;
  error: string;
  logout: () => void;
  loginMutation: UseMutationResult<AxiosResponse>;
  updateCurrentPage: (page: number) => void;
  currentPage: number;
}
