import React from 'react';
import { View, Button } from 'react-native';

import { useAuth } from '../../context/AuthContext';

// import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Button title="Sair" onPress={signOut}>
        Sair
      </Button>
    </View>
  );
};

export default Dashboard;
