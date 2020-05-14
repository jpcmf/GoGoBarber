import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <Logo />

        <form action="">
          <h1>Faça seu login</h1>
          <input type="text" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <button type="submit">Entrar</button>
          <a href="/forgot">Esqueci minha senha</a>
        </form>
        <a href="/forgot">
          <FiLogIn />
          Criar conta
        </a>
      </Content>

      <Background>a</Background>
    </Container>
  );
};

export default SignIn;
