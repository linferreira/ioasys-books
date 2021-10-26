import styled, { css } from "styled-components";

export const Title = styled.h1`
  ${({ theme, color }) => css`
    color: ${color};
    font-family: ${theme.typography.family};
    font-weight: ${theme.typography.weight.xs};
    font-size: ${theme.typography.sizes.lg};
    line-height: ${theme.typography.lineHeight.xl};
    margin-left: ${theme.spacing.md};
  `}
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1130px;
  display: flex;
  align-items: center;
`;
