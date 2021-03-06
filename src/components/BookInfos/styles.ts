import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  height: 70vh;
  display: flex;
  overflow: auto;
  margin: 48px;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) =>
      props.theme.colors.neutral.lighterBackground};
  }

  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.neutral.background};
  }

  @media (max-width: 768px) {
    width: 80vw;
    margin: 24px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const BookImage = styled.img`
  width: 100%;
  max-width: 349px;
  height: 100%;
  max-height: 512px;
  margin-right: ${({ theme }) => theme.spacing.md};

  @media (max-width: 768px) {
    max-width: 240px;
    max-height: 351px;
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
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  `}
`;

export const AuthorTitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.secundary.main};
    font-weight: ${theme.typography.weight.sm};
    line-height: ${theme.typography.lineHeight.md};
    font-size: ${theme.typography.sizes.xs};
    margin-bottom: ${theme.spacing.xl};
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
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
