import React, { FC, InputHTMLAttributes } from 'react';
import { Background, Button, Content, Label, StyledInput } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hasButton?: boolean;
  buttonTitle?: string;
  buttonDisabled?: boolean;
}

export const Input: FC<InputProps> = ({
  label,
  name,
  type,
  hasButton,
  buttonTitle,
  buttonDisabled,
  ...props
}) => {
  return (
    <Background>
      <Content>
        <Label htmlFor={name}>{label}</Label>

        <StyledInput id={name} type={type} {...props} />
      </Content>
      {hasButton && <Button disabled={buttonDisabled}>{buttonTitle}</Button>}
    </Background>
  );
};
