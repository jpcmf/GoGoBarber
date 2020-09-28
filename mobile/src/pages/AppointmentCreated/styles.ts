import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
`;

export const Title = styled.Text`
  color: ${colors.white};
  font-family: 'RobotoSlab-Medium';
  font-size: 30px;
  margin-top: 48px;
  text-align: center;
`;

export const Description = styled.Text`
  color: ${colors.gray};
  font-family: 'RobotoSlab-Regular';
  font-size: 18px;
  margin-top: 16px;
  text-align: center;
`;

export const BackButton = styled(RectButton)`
  align-items: center;
  background-color: ${colors.brand};
  border-radius: 10px;
  height: 46px;
  justify-content: center;
  margin-top: 24px;
  padding: 12px 24px;
`;

export const BackButtonText = styled.Text`
  color: ${colors.secondary};
  font-family: 'RobotoSlab-Medium';
  font-size: 18px;
`;
