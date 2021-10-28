import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0px;
  left: 0px;
  z-index: 1000;
  background: ${({theme}) => theme.colors.neutral.background};
`;
