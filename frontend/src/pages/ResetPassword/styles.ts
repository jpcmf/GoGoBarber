import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import background from '../../assets/sign-in-background.png';

import colors from '../../styles/colors';

export const Container = styled.div`
  align-items: stretch;
  display: flex;
  height: 100vh;
`;

export const Content = styled.div`
  max-width: 700px;
  width: 100%;
`;

const fadeLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }

  to {
    opacity: 1;
    transform: translateX(0)
  }
`;

export const AnimationContainer = styled.div`
  align-items: center;
  animation: ${fadeLeft} 1s;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;

  > a {
    color: ${colors.lnkTxt};
    display: inline-flex;
    align-items: center;
    margin-top: 24px;
    text-decoration: none;
    transition: color 300ms ease;

    &:hover {
      color: ${(props) => props && shade(0.2, colors.lnkTxt)};
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

export const Background = styled.div`
  flex: 1;
  background: url(${background}) no-repeat center;
  background-size: cover;
`;
