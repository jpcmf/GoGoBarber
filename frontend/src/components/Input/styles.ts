import styled, { css } from 'styled-components';

import colors from '../../styles/colors';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background-color: ${colors.f_input_bg};
  border-radius: 10px;
  border: solid 2px ${colors.f_input_bd};
  color: ${colors.f_input_ph};
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  transition: all 300ms ease;

  + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isFocused &&
    css`
      border-color: ${colors.brand};
      color: ${colors.brand};
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: ${colors.brand};
    `}

  input {
    background-color: transparent;
    border: 0;
    color: ${colors.f_input_txt};
    flex: 1;

    &::placeholder {
      color: ${colors.f_input_ph};
    }
  }

  svg {
    margin-right: 16px;
  }
`;
