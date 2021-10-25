import { theme } from './theme';
type Theme = typeof theme;

declare module 'styled-componets' {
    export interface DefaultTheme extends Theme {}
}