import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import colors from '../../styles/colors';
import { ContainerProps } from './interface';

export const Container = styled.View<ContainerProps>`
  align-items: center;
  background-color: ${colors.inputBg};
  border-width: 2px;
  border-color: ${colors.inputBd};
  border-radius: 10px;
  flex-direction: row;
  height: 60px;
  margin-bottom: 8px;
  padding: 0 16px;
  width: 100%;

  ${(props) =>
    props.isFocused &&
    css`
      border-color: ${colors.brand};
    `}
`;

export const TextInput = styled.TextInput`
  color: ${colors.white};
  flex: 1;
  font-family: 'RobotoSlab-Regular';
  font-size: 16px;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
