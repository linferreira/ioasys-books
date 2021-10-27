import styled, { css } from 'styled-components';

export const CardContainer = styled.div`
  padding: 0 120px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding:  0 20px;
  }

`;
