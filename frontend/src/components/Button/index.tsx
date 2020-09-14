import React, { ButtonHTMLAttributes } from 'react';

import LoadingSpinner from '../LoadingSpinner';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => {
  return (
    <Container type="button" {...rest}>
      {loading ? <LoadingSpinner /> : children}
    </Container>
  );
};

export default Button;
