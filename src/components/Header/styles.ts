import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 42px 120px;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;
