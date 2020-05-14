import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  background-color: ${colors.f_input_bg};
  border-radius: 10px;
  border: solid 2px ${colors.f_input_bd};
  color: ${colors.f_input_ph};
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;

  + div {
    margin-top: 8px;
  }

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
