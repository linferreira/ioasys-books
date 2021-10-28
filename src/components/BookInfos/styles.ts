import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 600px;
  display: flex;

  @media (max-width: 768px) {
    width: 70vw;
    height: 90vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: scroll;
  }
`;

export const BookImage = styled.img`
  margin-right: ${({ theme }) => theme.spacing.md};

  @media (max-width: 768px) {
    margin: 0;
    margin-bottom: ${({ theme }) => theme.spacing.lg};

  }
`;

export const BookTitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.primary.dark};
    font-weight: ${theme.typography.weight.md};
    line-height: ${theme.typography.lineHeight.xl};
    font-size: ${theme.typography.sizes.xl};
  `}
`;

export const AuthorTitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.secundary.main};
    font-weight: ${theme.typography.weight.sm};
    line-height: ${theme.typography.lineHeight.md};
    font-size: ${theme.typography.sizes.xs};
    margin-bottom: ${theme.spacing.xl};
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

export const InfosContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InfosWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const InfoTitles = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.primary.dark};
    font-size: ${theme.typography.sizes.xs};
  `}
`;

export const InfoTitle = styled.h3`
  ${({ theme }) => css`
    text-transform: uppercase;
    color: ${theme.colors.primary.dark};
    font-size: ${theme.typography.sizes.xs};
    margin-bottom: ${theme.spacing.sm};
  `}
`;

export const InfoItems = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primary.light};
    font-weight: ${theme.typography.weight.sm};
    font-size: ${theme.typography.sizes.xs};
  `}
`;
