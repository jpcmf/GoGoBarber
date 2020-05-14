import styled from 'styled-components';
import { shade } from 'polished';

import colors from '../../styles/colors';

export const Container = styled.button`
  background-color: ${colors.f_btn_bg};
  border-radius: 10px;
  border: 0;
  color: ${colors.f_btn_txt};
  font-weight: 600;
  height: 56px;
  margin-top: 16px;
  padding: 0 16px;
  transition: background-color 300ms ease;
  width: 100%;

  &:hover {
    background-color: ${(props): string =>
      props && shade(0.2, colors.f_btn_bg)};
  }
`;
