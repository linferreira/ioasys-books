import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 368px;
  margin-top: ${({ theme }) => theme.spacing.md};
`;

export const Box = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.neutral.lighterBackground};
    padding: ${theme.spacing.md};
    margin-top: -7px;

    color: ${theme.colors.neutral.white};
    font-weight: ${theme.typography.weight.xl};
    line-height: ${theme.typography.lineHeight.sm};
    font-size: ${theme.typography.sizes.md};
    border-radius: ${theme.shapes.borderRadius.sm};
  `}
`;

export const Arrow = styled.div`
  display: inline-block;
  margin-left: 20px;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid ${({theme}) => theme.colors.neutral.lighterBackground};
`;
