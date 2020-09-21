import styled from 'styled-components';
import { shade } from 'polished';

import colors from '../../styles/colors';

export const Container = styled.div`
  > header {
    align-items: center;
    background-color: ${colors.headerBg};
    display: flex;
    height: 144px;
    width: 100%;

    > div {
      margin: 0 auto;
      max-width: 1120px;
      width: 100%;

      svg {
        color: ${colors.headerTxt};
      }
    }
  }
`;

export const Content = styled.div`
  animation: 700ms ease-out 0s 1 slideInFromUp;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: -174px auto 0;

  form {
    margin: 80px 0;
    text-align: center;
    width: 340px;

    h1 {
      color: ${colors.white};
      font-size: 20px;
      text-align: left;
      margin-bottom: 24px;
    }

    a {
      color: ${colors.lnkAux};
      display: inline-block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 300ms ease;

      &:hover {
        color: ${(props): string => props && shade(0.2, colors.lnkAux)};
      }
    }
  }
`;

export const PasswordGroup = styled.div`
  margin-top: 24px !important;
`;

export const AvatarInput = styled.div`
  margin: 0 auto 32px;
  position: relative;
  width: 186px;

  img {
    border-radius: 50%;
    height: 186px;
    width: 186px;
  }

  label {
    align-items: center;
    background-color: ${colors.brand};
    border-radius: 50%;
    border: 0;
    bottom: 0;
    cursor: pointer;
    display: flex;
    height: 48px;
    justify-content: center;
    position: absolute;
    right: 0;
    width: 48px;
    transition: background-color 300ms ease;

    &:hover {
      background-color: ${shade(0.2, `${colors.brand}`)};
    }

    svg {
      color: ${colors.secondary};
    }

    input {
      display: none;
    }
  }
`;
