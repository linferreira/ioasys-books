import { theme } from './theme';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: ${({theme}) => (theme.typography.family.primary)};
  }
`;
