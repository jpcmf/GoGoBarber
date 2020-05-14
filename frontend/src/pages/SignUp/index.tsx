import React, { useCallback } from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required(
          'O campo Nome é de preenchimento obrigatório.',
        ),
        email: Yup.string()
          .required('O campo E-mail é de preenchimento obrigatório.')
          .email(
            'O endereço usado no campo E-mail não é um endereço de e-mail válido.',
          ),
        password: Yup.string().min(
          6,
          'O campo Password deve ter no mínimo 6 digitos.',
        ),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  // async function handleSubmit(data: object): void {

  // }

  return (
    <Container>
      <Background />

      <Content>
        <Logo />

        <Form onSubmit={handleSubmit}>
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
        </Form>

        <a href="/forgot">
          <FiArrowLeft />
          Já possuo cadastro
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
