import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Button } from 'react-native';

import { useAuth } from '../../context/AuthContext';

import {
  Container,
  Header,
  HeaderTitle,
  Username,
  ProfileButton,
  UserAvatar,
} from './styles';

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();
  const { navigate } = useNavigation();

  const navigateToProfile = useCallback(() => {
    navigate('Profile');
  }, [navigate]);

  return (
    <Container>
      <Header>
        <HeaderTitle>
          Bem-vindo, {'\n'}
          <Username>{user.name}</Username>
        </HeaderTitle>
        <ProfileButton onPress={navigateToProfile}>
          <UserAvatar source={{ uri: user.avatar_url }} />
        </ProfileButton>
      </Header>
      <Button title="logout" onPress={signOut}>
        logout
      </Button>
    </Container>
  );
};

export default Dashboard;
