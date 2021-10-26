import { theme } from './../../../styles/theme';
import styled, { css } from 'styled-components';

export const Label = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.neutral.white};
    font-family: ${theme.typography.family};
    font-weight: ${theme.typography.weight.sm};
    font-size: ${theme.typography.sizes.xs};
    line-height: ${theme.typography.lineHeight.sm};
    opacity: 50%;
  `}
`;

export const Background = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 368px;
    height: 60px;
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    background: ${theme.colors.neutral.background};
    margin-top: ${theme.spacing.md};
    border-radius: ${theme.shapes.borderRadius.sm};

    @media (max-width: 768px) {
      width: 100%;
    }
  `}
`;

export const StyledInput = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.neutral.white};
    border: none;
    display: block;
    width: 100%;
    font-size: ${theme.typography.sizes.md};
    line-height: ${theme.typography.lineHeight.lg};

    background: transparent;

    :hover {
      outline: none;
    }
    :active {
      outline: none;
    }
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Button = styled.button`
  ${({ theme }) => css`
    height: ${theme.spacing.xl};
    width: 85px;
    background: ${theme.colors.neutral.white};
    border: none;
    border-radius: ${theme.shapes.borderRadius.full};
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    cursor: pointer;
    margin-top: ${theme.spacing.xs};
    color: ${theme.colors.primary.main};
    font-size: ${theme.typography.sizes.md};
    line-height: ${theme.typography.lineHeight.md};
    font-weight: ${theme.typography.weight.md};

    :focus,
    :hover {
      opacity: 75%;
    }
  `}
`;
