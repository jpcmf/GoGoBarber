import React, { useCallback, useRef } from 'react';
import {
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
import ImagePicker from 'react-native-image-picker';
import getValidationErrors from '../../utils/getValidationsErrors';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';
import colors from '../../styles/colors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Title,
  Container,
  ActionsWrapper,
  BackButton,
  LogoutButton,
  UserAvatarButton,
  UserAvatar,
  UserAvatarIcon,
} from './styles';

import { ProfileFormData } from './interface';

const Profile: React.FC = () => {
  const { user, signOut, updateUser } = useAuth();

  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const emailInputRef = useRef<TextInput>(null);
  const oldPasswordInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const confirmPasswordInputRef = useRef<TextInput>(null);

  const handleSignUp = useCallback(
    async (data: ProfileFormData) => {
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
          old_password: Yup.string(),
          password: Yup.string().when('old_password', {
            is: (val) => !!val.length,
            then: Yup.string()
              .required('O campo Nova senha é de preenchimento obrigatório.')
              .notOneOf(
                [Yup.ref('old_password'), null],
                'Sua nova senha não pode ser igual à sua senha atual',
              ),
            otherwise: Yup.string(),
          }),

          password_confirmation: Yup.string().when('old_password', {
            is: (val) => !!val.length,
            then: Yup.string()
              .required(
                'O campo Confirmar senha é de preenchimento obrigatório.',
              )
              .oneOf([Yup.ref('password'), null], 'As senhas não coincidem.'),
            otherwise: Yup.string(),
          }),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const {
          name,
          email,
          old_password,
          password,
          password_confirmation,
        } = data;

        const formData = {
          name,
          email,
          ...(old_password
            ? {
                old_password,
                password,
                password_confirmation,
              }
            : {}),
        };

        const response = await api.put('/profile', formData);

        updateUser(response.data);

        Alert.alert('😃 Perfil atualizado com sucesso.');

        navigation.goBack();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        Alert.alert(
          'Erro ao atualizar seu perfil 😕.',
          'Ocorreu um erro ao atualizar o perfil no GoBarber. Tente novamente.',
        );
      }
    },
    [navigation, updateUser],
  );

  const handleBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleUpdateAvatar = useCallback(() => {
    ImagePicker.showImagePicker(
      {
        title: 'Selecione seu avatar',
        cancelButtonTitle: 'Cancelar',
        takePhotoButtonTitle: 'Usar câmera',
        chooseFromLibraryButtonTitle: 'Escolher da galeria',
      },
      (response) => {
        if (response.didCancel) {
          return;
        }

        if (response.error) {
          Alert.alert('Erro ao atualizar seu avatar', response.error);
        }

        const data = new FormData();

        data.append('avatar', {
          uri: response.uri,
          type: 'image/jpeg',
          name: `${user.id}.jpg`,
        });

        api.patch('/users/avatar', data).then((apiResponse) => {
          updateUser(apiResponse.data);
        });
      },
    );
  }, [user.id, updateUser]);

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
            <ActionsWrapper>
              <BackButton onPress={handleBack}>
                <Icon name="chevron-left" size={24} color={colors.gray} />
              </BackButton>

              <LogoutButton onPress={signOut}>
                <Icon name="power" size={24} color={colors.gray} />
              </LogoutButton>
            </ActionsWrapper>

            <UserAvatarButton onPress={handleUpdateAvatar}>
              <UserAvatar
                source={{
                  uri: user.avatar_url
                    ? user.avatar_url
                    : `https://api.hello-avatar.com/adorables/186/${user.name}`,
                }}
              />
              <UserAvatarIcon>
                <Icon name="camera" size={24} color={colors.secondary} />
              </UserAvatarIcon>
            </UserAvatarButton>
            <View>
              <Title>Meu perfil</Title>
            </View>

            <Form
              initialData={{ name: user.name, email: user.email }}
              ref={formRef}
              onSubmit={handleSignUp}
            >
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
                  oldPasswordInputRef.current?.focus();
                }}
                name="email"
                icon="mail"
                placeholder="E-mail"
              />

              <Input
                ref={oldPasswordInputRef}
                secureTextEntry
                textContentType="newPassword"
                returnKeyType="next"
                containerStyle={{ marginTop: 16 }}
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
                name="old_password"
                icon="lock"
                placeholder="Senha atual"
              />

              <Input
                ref={passwordInputRef}
                secureTextEntry
                textContentType="newPassword"
                returnKeyType="next"
                onSubmitEditing={() => {
                  confirmPasswordInputRef.current?.focus();
                }}
                name="password"
                icon="lock"
                placeholder="Nova Senha"
              />
              <Input
                ref={confirmPasswordInputRef}
                secureTextEntry
                textContentType="newPassword"
                returnKeyType="send"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
                name="password_confirmation"
                icon="lock"
                placeholder="Confirmar senha"
              />
              <Button
                onPress={() => {
                  formRef.current?.submitForm();
                }}
              >
                Confirmar mudanças
              </Button>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Profile;
