import styled, { css } from 'styled-components';

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.neutral.white};
    font-family: ${theme.typography.family};
    font-weight: ${theme.typography.weight.xs};
    font-size: ${theme.typography.sizes.lg};
    line-height: ${theme.typography.lineHeight.xl};
    margin-left: ${theme.spacing.md};
  `}
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 35px;
`;

export const Container = styled.div``;

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
