import { AppProps } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BooksStorage } from '../contexts/BooksContext';
import { GlobalStyles } from '../styles/globals.styles';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <BooksStorage>
        <Component {...pageProps} />
      </BooksStorage>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
