import styled from 'styled-components';
import { IImageUrl } from '../../Interfaces/book';

export const Content = styled.div<IImageUrl>`
  display: block;
  content: '';
  background: url(${({ urlImg }) => urlImg}) no-repeat center center;
  background-size: cover;
  height: 100vh;
`;
