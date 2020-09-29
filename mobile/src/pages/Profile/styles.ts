import styled from 'styled-components/native';
import { Platform } from 'react-native';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 0}px;
`;

export const ActionsWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
`;

export const BackButton = styled.TouchableOpacity``;

export const LogoutButton = styled.TouchableOpacity``;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 32px;
`;

export const UserAvatar = styled.Image`
  align-self: center;
  border-radius: 98px;
  height: 186px;
  width: 186px;
`;

export const Title = styled.Text`
  color: ${colors.white};
  font-family: 'RobotoSlab-Medium';
  font-size: 20px;
  margin: 24px 0;
  text-align: left;
`;
