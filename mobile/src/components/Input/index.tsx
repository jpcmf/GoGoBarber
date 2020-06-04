import React from 'react';

import { InputProps } from './interface';

import { Container, TextInput, Icon } from './styles';
import colors from '../../styles/colors';

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => {
  return (
    <Container>
      <Icon name={icon} size={20} color={colors.iconBg} />

      <TextInput
        keyboardAppearance="dark"
        placeholderTextColor={colors.inputPh}
        {...rest}
      />
    </Container>
  );
};

export default Input;
