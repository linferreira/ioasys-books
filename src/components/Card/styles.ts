import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 272px;
    background: ${theme.colors.neutral.white};
    height: 160px;
    border-radius: ${theme.shapes.borderRadius.sm};
    margin-bottom: ${theme.spacing.md};
    padding: 19px 16px;
    display: flex;
  `}
`;

export const Image = styled.img`
  width: 40%;
  height: 100%;
  margin-right: ${({theme}) => theme.spacing.md};
`;

export const BookTitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.primary.dark};
    font-weight: ${theme.typography.weight.md};
    line-height: ${theme.typography.lineHeight.md};
    font-size: ${theme.typography.sizes.sm};
  `}
`;

export const AuthorTitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.secundary.main};
    font-weight: ${theme.typography.weight.sm};
    line-height: ${theme.typography.lineHeight.md};
    font-size: ${theme.typography.sizes.xs};
    margin-bottom: ${theme.spacing.lg};
  `}
`;

export const BookInfos = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primary.light};
    font-weight: ${theme.typography.weight.sm};
    line-height: ${theme.typography.lineHeight.md};
    font-size: ${theme.typography.sizes.xs};
  `}
`;
