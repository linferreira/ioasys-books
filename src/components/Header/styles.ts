import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 42px 120px;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const UserName = styled.p`
  ${({ theme }) => css`
    margin-left: 5px;
    font-weight: ${theme.typography.weight.md};
  `}
`;

export const Button = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;
  margin-left: ${({ theme }) => theme.spacing.md};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme }) => theme.spacing.xl};
`;
