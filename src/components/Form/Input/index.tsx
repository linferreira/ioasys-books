import React, { InputHTMLAttributes, FC } from 'react';
import { Background, Button, Label, StyledInput, Content } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hasButton?: boolean;
  buttonTitle?: string;
}

export const Input: FC<InputProps> = ({
  label,
  name,
  type,
  hasButton,
  buttonTitle,
  ...props
}) => {
  return (
    <Background>
      <Content>
        <Label htmlFor={name}>{label}</Label>

        <StyledInput id={name} type={type} {...props} />
      </Content>
      {hasButton && <Button>{buttonTitle}</Button>}
    </Background>
  );
};
