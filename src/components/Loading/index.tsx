import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';
import { Wrapper } from './styles';

export const Loading = () => {
  return (
    <Wrapper>
      <CircularProgress color="secondary" />
    </Wrapper>
  );
};
