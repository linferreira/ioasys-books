import styled, { css } from 'styled-components';

type ContentProps = {
  urlImg: string;
};

export const Content = styled.div<ContentProps>`
  display: block;
  content: '';
  background: url(${({ urlImg }) => urlImg}) no-repeat center center;
  background-size: cover;
  height: 100vh;
  width: 100vw;
`;
