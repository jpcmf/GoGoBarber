import React from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  return (
    <Container>
      <Background />

      <Content>
        <Logo />

        <form action="">
          <h1>Faça seu cadastro</h1>

          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Cadastrar</Button>
        </form>

        <a href="/forgot">
          <FiArrowLeft />
          Já possuo cadastro
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
