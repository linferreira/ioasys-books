import { AppProps } from 'next/app';
import React from 'react';
import { QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import { UserStorage } from '../contexts/UserContext';
import queryClient from '../services/query';
import { GlobalStyles } from '../styles/globals.styles';
import { theme } from '../styles/theme';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BooksStorage } from '../contexts/BooksContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <UserStorage>
          <BooksStorage>
            <Component {...pageProps} />
          </BooksStorage>
        </UserStorage>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
