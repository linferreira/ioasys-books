import styled, { css } from 'styled-components';

const img = '/assets/background.png'

export const Content = styled.div`
  display: block;
  content: '';
  background: url(${img}) no-repeat center center;
  background-size: cover;
  height: 100vh;
  width: 100vw;
`;
