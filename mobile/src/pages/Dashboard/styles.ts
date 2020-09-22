import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import colors from '../../styles/colors';

import Provider from './interface';

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

export const ProvidersList = styled(FlatList as new () => FlatList<Provider>)`
  padding: 32px 24px 16px;
`;

export const ProvidersListTitle = styled.Text`
  font-size: 25px;
  margin-bottom: 24px;
  color: ${colors.white};
  font-family: 'RobotoSlab-Medium';
`;

export const ProviderContainer = styled(RectButton)`
  align-items: center;
  background-color: ${colors.providerBg};
  border-radius: 10px;
  flex-direction: row;
  margin-bottom: 16px;
  padding: 20px 16px;
`;

export const ProviderAvatar = styled.Image`
  border-radius: 36px;
  border: 1px solid ${colors.secondary};
  height: 72px;
  width: 72px;
`;

export const ProviderInfo = styled.View`
  flex: 1;
  margin-left: 20px;
`;

export const ProviderName = styled.Text`
  color: ${colors.white};
  font-family: 'RobotoSlab-Medium';
  font-size: 18px;
  line-height: 23px;
  margin-bottom: 12px;
`;

export const ProviderTimeWork = styled.View`
  align-items: center;
  flex-direction: row;
  margin-top: 8px;
`;

export const ProviverTimeWorkText = styled.Text`
  color: ${colors.providerTimeTxt};
  font-family: 'RobotoSlab-Regular';
  font-size: 12px;
  line-height: 15px;
  margin-left: 8px;
`;
