import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Platform } from 'react-native';

import colors from '../../styles/colors';

export const Container = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 0}px;
`;

export const Title = styled.Text`
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  font-size: 24px;
  margin: 64px 0 24px;
`;

export const BackButton = styled.TouchableOpacity`
  align-items: center;
  background-color: ${colors.secondary};
  border-top-color: ${colors.inputBd};
  border-top-width: 1px;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  left: 0;
  padding: 16px 0 ${8 + getBottomSpace()}px;
  position: absolute;
  right: 0;
`;

export const BackButtonText = styled.Text`
  color: ${colors.white};
  font-family: 'RobotoSlab-Regular';
  font-size: 18px;
  margin-left: 16px;
`;
