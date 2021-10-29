import { AppProps } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BooksStorage } from '../contexts/BooksContext';
import { GlobalStyles } from '../styles/globals.styles';
import { theme } from '../styles/theme';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <BooksStorage>
          <Component {...pageProps} />
        </BooksStorage>
      </QueryClientProvider>{' '}
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
