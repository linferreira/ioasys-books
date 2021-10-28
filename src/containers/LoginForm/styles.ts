import styled, { css } from 'styled-components';

export const Container = styled.form``;

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 5%;

  @media (max-width: 768px) {
    margin: 0 5vw;
  }
`;
