import styled, { css } from 'styled-components';

export const Container = styled.button`
  ${({ theme }) => css`
    width: 100%;
    max-width: 272px;
    background: ${theme.colors.neutral.white};
    height: 160px;
    border-radius: ${theme.shapes.borderRadius.sm};
    margin-bottom: ${theme.spacing.md};
    padding: ${theme.spacing.md};
    display: flex;
    cursor: pointer;
    border: none;

    box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);

    :focus,
    :hover {
      opacity: 75%;
    }

    @media (max-width: 768px) {
      max-width: 100%;
    }
  `}
`;

export const Image = styled.img`
  width: 40%;
  height: 100%;
  max-height: 124px;
  max-width: 81px;
  margin-right: ${({ theme }) => theme.spacing.md};
`;

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const BookTitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.primary.dark};
    font-weight: ${theme.typography.weight.md};
    line-height: ${theme.typography.lineHeight.md};
    font-size: ${theme.typography.sizes.sm};
    text-align: start;

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
    text-align: start;

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
    text-align: start;

    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  `}
`;

export const BookInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: ${({ theme }) => theme.spacing.md};
`;
