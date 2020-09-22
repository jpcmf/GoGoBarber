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

export const HeaderTitle = styled.Text`
  color: ${colors.white};
  font-family: 'RobotoSlab-Regular';
  font-size: 20px;
  line-height: 28px;
`;

export const Username = styled.Text`
  color: ${colors.brand};
  font-family: 'RobotoSlab-Medium';
  font-weight: bold;
`;

export const ProfileButton = styled.TouchableOpacity``;

export const UserAvatar = styled.Image`
  border-radius: 28px;
  height: 56px;
  width: 56px;
`;
