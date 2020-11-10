import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../styles/colors';
import api from '../../services/api';

import { useAuth } from '../../hooks/auth';

import {
  Container,
  Header,
  HeaderTitle,
  Username,
  ProfileButton,
  UserAvatar,
  ProvidersList,
  ProviderContainer,
  ProviderAvatar,
  ProviderInfo,
  ProviderName,
  ProviderTimeWork,
  ProviverTimeWorkText,
  ProvidersListTitle,
} from './styles';

import Provider from './interface';

// import EmptyListMessage from '../../components/EmptyListMessage';

const Dashboard: React.FC = () => {
  const [providers, setProviders] = useState<Provider[]>([]);

  const { user } = useAuth();
  const { navigate } = useNavigation();

  useEffect(() => {
    api.get('/providers').then((response) => {
      setProviders(response.data);
    });
  }, []);

  const navigateToProfile = useCallback(() => {
    navigate('Profile');
  }, [navigate]);

  const navigateToCreateAppointment = useCallback(
    (providerId: string) => {
      navigate('CreateAppointment', { providerId });
    },
    [navigate],
  );

  return (
    <Container>
      <Header>
        <HeaderTitle>
          Bem-vindo, {'\n'}
          <Username>{user.name}</Username>
        </HeaderTitle>
        <ProfileButton onPress={navigateToProfile}>
          <UserAvatar
            source={{
              uri: user.avatar_url
                ? user.avatar_url
                : `https://api.hello-avatar.com/adorables/56/${user.name}`,
            }}
          />
        </ProfileButton>
      </Header>

      <ProvidersList
        data={providers}
        keyExtractor={(provider) => provider.id}
        ListHeaderComponent={
          <ProvidersListTitle>Barbeiros e Cabeleireiros</ProvidersListTitle>
        }
        renderItem={({ item: provider }) => (
          <ProviderContainer
            onPress={() => navigateToCreateAppointment(provider.id)}
          >
            <ProviderAvatar
              source={{
                uri: provider.avatar_url
                  ? provider.avatar_url
                  : `https://api.hello-avatar.com/adorables/72/${provider.name}`,
              }}
            />
            <ProviderInfo>
              <ProviderName>{provider.name}</ProviderName>

              <ProviderTimeWork>
                <Icon name="calendar" size={14} color={colors.brand} />
                <ProviverTimeWorkText>Segunda à sexta</ProviverTimeWorkText>
              </ProviderTimeWork>

              <ProviderTimeWork>
                <Icon name="clock" size={14} color={colors.brand} />
                <ProviverTimeWorkText>8h às 18h</ProviverTimeWorkText>
              </ProviderTimeWork>
            </ProviderInfo>
          </ProviderContainer>
        )}
        // ListEmptyComponent={<EmptyListMessage />}
      />
    </Container>
  );
};

export default Dashboard;
