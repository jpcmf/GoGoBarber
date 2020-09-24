import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import colors from '../../styles/colors';
import Provider from '../Dashboard/interface';

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

export const ProvidersList = styled.View`
  height: 112px;
`;

export const SelectedProvider = styled(
  FlatList as new () => FlatList<Provider>,
)`
  padding: 32px 24px;
`;

export const ProviderContainer = styled(RectButton)<{ selected: boolean }>`
  align-items: center;
  background-color: ${(props) =>
    props.selected ? colors.brand : colors.providerBg};
  border-radius: 10px;
  flex-direction: row;
  margin-right: 16px;
  padding: 8px 12px;
`;

export const ProviderAvatar = styled.Image`
  border-radius: 16px;
  height: 32px;
  width: 32px;
`;

export const ProviderName = styled.Text<{ selected: boolean }>`
  color: ${(props) => (props.selected ? colors.providerNameTxt : colors.white)};
  font-family: 'RobotoSlab-Medium';
  font-size: 16px;
  margin-left: 8px;
`;

export const DateTimePickerWrapper = styled.View``;

export const DateTimePickerTitle = styled.Text`
  color: ${colors.white};
  font-family: 'RobotoSlab-Medium';
  font-size: 25px;
  margin: 0 24px 24px;
`;

export const OpenDatePickerButton = styled(RectButton)`
  align-items: center;
  background-color: ${colors.brand};
  border-radius: 10px;
  height: 46px;
  justify-content: center;
  margin: 0 24px;
`;

export const OpenDatePickerButtonText = styled.Text`
  color: ${colors.datepickerSelectButtonText};
  font-family: 'RobotoSlab-Medium';
  font-size: 16px;
`;
