import React, { useState } from 'react';
import { Background } from '../../components/Background';
import { Input } from '../../components/Form/Input';
import { Loading } from '../../components/Loading';
import { Logo } from '../../components/Logo';
import { Container, Content } from './styles';
const img = '/assets/login-background.png';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { TOKEN_POST } from '../../config/app-config';
import { useRouter } from 'next/dist/client/router';
import { TextError } from '../../components/Error';

export const LoginForm = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [response, setresponse] = useState<null | any[]>(null);
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    userLogin(email, password);
  };

  async function userLogin(email: string, password: string) {
    try {
      setIsLoading(true);
      const { url, options } = TOKEN_POST({ email, password });
      const tokenRes = await fetch(url, options);
      if (!tokenRes.ok) throw new Error(`Error: ${tokenRes.statusText}`);
      const res = await tokenRes.json();
      const token = tokenRes.headers.get('Authorization')

      localStorage.setItem("@ioasys-books-token", token);

      router.push('/home');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

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
            <TextError message={error} />
          </Container>
        </Content>
        {isLoading && <Loading />}
      </Background>
    </>
  );
};
