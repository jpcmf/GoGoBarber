import React from 'react';

import { ButtonProps } from './interface';

import { Container, ButtonText } from './styles';

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Container {...rest}>
      <ButtonText>{children}</ButtonText>
    </Container>
  );
};

export default Button;
