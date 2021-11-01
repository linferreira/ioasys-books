import React, { useContext, useState } from 'react';
import { Background } from '../../components/Background';
import { TextError } from '../../components/Error';
import { Input } from '../../components/Form/Input';
import { Loading } from '../../components/Loading';
import { Logo } from '../../components/Logo';
import { BooksContext } from '../../contexts/BooksContext';
import { Container, Content } from './styles';
const img = '/assets/login-background.png';

export const LoginForm = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { error, isLoading, loginMutation } = useContext(BooksContext);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await loginMutation.mutate({ email, password });
  };

  return (
    <>
      <Background urlImg={img}>
        <Content>
          <Logo color="white" />

          <Container onSubmit={handleSubmit}>
            <Input
              value={email}
              label="Email"
              type="email"
              name="email"
              onChange={({ target }) => setEmail(target.value)}
            />
            <Input
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              label="Senha"
              type="password"
              hasButton={true}
              name="password"
              buttonTitle="Entrar"
            />
            {error && <TextError message={error} />}
          </Container>
        </Content>
        {isLoading && <Loading />}
      </Background>
    </>
  );
};
