import { createGlobalStyle } from 'styled-components';

import colors from './colors';
import './css/animations.css';

export default createGlobalStyle`
  * {
      box-sizing: border-box;
      margin: 0;
      outline: 0;
      padding: 0;
    }

    *:focus {
      outline: 0;
    }

    html, body, #root {
      height: 100%;
    }

    body {
      -webkit-font-smoothing: antialiased !important;
      background-color: ${colors.secondary};
    }

    body, input, button {
      font-family: 'Roboto Slab', Arial, Helvetica, sans-serif;
      font-size: 16px;
    }

    h1, h2, h3, h4, h5, h6, strong {
      font-weight: 600;
    }

    ul {
      list-style: none;
    }

    button {
      cursor: pointer;
    }
`;
