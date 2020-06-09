import React, { useCallback, useRef } from 'react';
import {
  Image,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import getValidationErrors from '../../utils/getValidationsErrors';

import api from '../../services/api';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { SignUpFormData } from './interface';

import logo from '../../assets/logo.png';
import color from '../../styles/colors';

import { Title, Container, BackButton, BackButtonText } from './styles';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const handleSignUp = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

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
            'O campo Senha deve ter no mínimo 6 digitos.',
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', data);

        Alert.alert(
          'Cadastro realizado 😃.',
          'Você já pode fazer seu login no GoBarber.',
        );

        navigation.navigate('SignIn');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        Alert.alert(
          'Erro no cadastro 😕.',
          'Ocorreu um erro ao fazer o cadastro no GoBarber. Tente novamente.',
        );
      }
    },
    [navigation],
  );

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Image source={logo} />

            <View>
              <Title>Crie sua conta</Title>
            </View>
            <Form ref={formRef} onSubmit={handleSignUp}>
              <Input
                autoCapitalize="words"
                returnKeyType="next"
                onSubmitEditing={() => {
                  emailInputRef.current?.focus();
                }}
                name="name"
                icon="user"
                placeholder="Nome"
              />
              <Input
                ref={emailInputRef}
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
                name="email"
                icon="mail"
                placeholder="E-mail"
              />
              <Input
                ref={passwordInputRef}
                secureTextEntry
                textContentType="newPassword"
                returnKeyType="send"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
                name="password"
                icon="lock"
                placeholder="Senha"
              />
              <Button
                onPress={() => {
                  formRef.current?.submitForm();
                }}
              >
                Enviar
              </Button>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <BackButton
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Icon name="arrow-left" size={20} color={color.white} />
        <BackButtonText>Já possuo uma conta</BackButtonText>
      </BackButton>
    </>
  );
};

export default SignUp;
