import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  align-items: center;
  background-color: ${colors.headerBg};
  flex-direction: row;
  justify-content: space-between;
  padding: 24px;
  padding-top: ${getStatusBarHeight() + 24}px;
`;

export const BackButton = styled.TouchableOpacity``;

export const HeaderTitle = styled.Text`
  color: ${colors.white};
  font-size: 20px;
  font-family: 'RobotoSlab-Medium';
  margin-left: 16px;
`;

export const UserAvatar = styled.Image`
  border-radius: 28px;
  height: 56px;
  margin-left: auto;
  width: 56px;
`;
