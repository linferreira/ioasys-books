import styled, { css } from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;
  margin-left: ${({ theme }) => theme.spacing.md};

  &:disabled {
    opacity: 0.5;
  }
`;

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primary.dark};
    line-height: ${theme.typography.lineHeight.md};
    font-weight: ${theme.typography.weight.sm};
    font-size: ${theme.typography.sizes.xs};
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacing.md};
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: ${theme.spacing.lg};
  `}
`;
