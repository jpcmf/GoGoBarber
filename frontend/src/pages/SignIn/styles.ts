import styled from 'styled-components';
import { shade } from 'polished';

import background from '../../assets/sign-in-background.png';

import colors from '../../styles/colors';

export const Container = styled.div`
  align-items: stretch;
  display: flex;
  height: 100vh;
`;

export const Content = styled.div`
  /* place-content: center center; */
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 700px;
  width: 100%;

  > a {
    color: ${colors.f_lnk_txt};
    display: inline-flex;
    align-items: center;
    margin-top: 24px;
    text-decoration: none;
    transition: color 300ms ease;

    &:hover {
      color: ${(props) => props && shade(0.2, colors.f_lnk_txt)};
    }

    svg {
      margin-right: 8px;
    }
  }

  form {
    margin: 80px 0;
    text-align: center;
    width: 340px;

    h1 {
      color: ${colors.white};
      margin-bottom: 24px;
    }

    input {
      background-color: ${colors.f_input_bg};
      border-radius: 10px;
      border: solid 2px ${colors.f_input_bd};
      color: ${colors.f_input_txt};
      padding: 16px;
      width: 100%;

      &::placeholder {
        color: ${colors.f_input_ph};
      }

      + input {
        margin-top: 8px;
      }
    }

    button {
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
        background-color: ${(props) => props && shade(0.2, colors.f_btn_bg)};
      }
    }

    a {
      color: ${colors.f_lnk_aux};
      display: inline-block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 300ms ease;

      &:hover {
        color: ${(props) => props && shade(0.2, colors.f_lnk_aux)};
      }
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${background}) no-repeat center;
  background-size: cover;
`;
