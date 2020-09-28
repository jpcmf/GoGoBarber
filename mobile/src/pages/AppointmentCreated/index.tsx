import React, { useCallback, useMemo } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import {
  Container,
  Title,
  Description,
  BackButton,
  BackButtonText,
} from './styles';

import colors from '../../styles/colors';

import { RouteParams } from './interface';

const AppointmentCreated: React.FC = () => {
  const { reset } = useNavigation();
  const { params } = useRoute();

  const routeParams = params as RouteParams;

  const handleBack = useCallback(() => {
    reset({
      routes: [{ name: 'Dashboard' }],
      index: 0,
    });
  }, [reset]);

  const formattedDate = useMemo(() => {
    return format(
      routeParams.date,
      "EEEE, 'dia' dd 'de' MMMM 'de' yyyy 'às' HH:mm'h'",
      {
        locale: ptBR,
      },
    );
  }, [routeParams.date]);

  return (
    <Container>
      <Icon name="check" size={80} color={colors.success} />
      <Title>Agendamento concluído</Title>
      <Description>
        {formattedDate} com {routeParams.provider_id}
      </Description>
      <BackButton onPress={handleBack}>
        <BackButtonText>Ok</BackButtonText>
      </BackButton>
    </Container>
  );
};

export default AppointmentCreated;
