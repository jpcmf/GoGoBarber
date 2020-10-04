import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

import colors from '../../styles/colors';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background-color: ${colors.inputBg};
  border-radius: 10px;
  border: solid 2px ${colors.inputBd};
  color: ${colors.inputPh};
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  transition: all 300ms ease;

  + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: ${colors.danger};
    `}

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
    color: ${colors.inputTxt};
    flex: 1;

    &::placeholder {
      color: ${colors.inputPh};
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background-color: ${colors.danger};
    color: ${colors.white};

    &:after {
      border-color: ${colors.danger} transparent;
    }
  }
`;
