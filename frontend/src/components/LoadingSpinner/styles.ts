import styled from 'styled-components';

export const Container = styled.div`
  animation: loadBullets 1.1s infinite ease;
  border-radius: 50%;
  font-weight: 600;
  font-size: 5px;
  height: 5px;
  margin: 0 auto;
  position: relative;
  text-indent: -9999em;
  transform: translateZ(0);
  width: 5px;

  @-webkit-keyframes loadBullets {
    0%,
    100% {
      box-shadow: 0em -2.6em 0em 0em #312e38,
        1.8em -1.8em 0 0em rgba(49, 46, 56, 0.2),
        2.5em 0em 0 0em rgba(49, 46, 56, 0.2),
        1.75em 1.75em 0 0em rgba(49, 46, 56, 0.2),
        0em 2.5em 0 0em rgba(49, 46, 56, 0.2),
        -1.8em 1.8em 0 0em rgba(49, 46, 56, 0.2),
        -2.6em 0em 0 0em rgba(49, 46, 56, 0.5),
        -1.8em -1.8em 0 0em rgba(49, 46, 56, 0.7);
    }
    12.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(49, 46, 56, 0.7),
        1.8em -1.8em 0 0em #312e38, 2.5em 0em 0 0em rgba(49, 46, 56, 0.2),
        1.75em 1.75em 0 0em rgba(49, 46, 56, 0.2),
        0em 2.5em 0 0em rgba(49, 46, 56, 0.2),
        -1.8em 1.8em 0 0em rgba(49, 46, 56, 0.2),
        -2.6em 0em 0 0em rgba(49, 46, 56, 0.2),
        -1.8em -1.8em 0 0em rgba(49, 46, 56, 0.5);
    }
    25% {
      box-shadow: 0em -2.6em 0em 0em rgba(49, 46, 56, 0.5),
        1.8em -1.8em 0 0em rgba(49, 46, 56, 0.7), 2.5em 0em 0 0em #312e38,
        1.75em 1.75em 0 0em rgba(49, 46, 56, 0.2),
        0em 2.5em 0 0em rgba(49, 46, 56, 0.2),
        -1.8em 1.8em 0 0em rgba(49, 46, 56, 0.2),
        -2.6em 0em 0 0em rgba(49, 46, 56, 0.2),
        -1.8em -1.8em 0 0em rgba(49, 46, 56, 0.2);
    }
    37.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(49, 46, 56, 0.2),
        1.8em -1.8em 0 0em rgba(49, 46, 56, 0.5),
        2.5em 0em 0 0em rgba(49, 46, 56, 0.7), 1.75em 1.75em 0 0em #312e38,
        0em 2.5em 0 0em rgba(49, 46, 56, 0.2),
        -1.8em 1.8em 0 0em rgba(49, 46, 56, 0.2),
        -2.6em 0em 0 0em rgba(49, 46, 56, 0.2),
        -1.8em -1.8em 0 0em rgba(49, 46, 56, 0.2);
    }
    50% {
      box-shadow: 0em -2.6em 0em 0em rgba(49, 46, 56, 0.2),
        1.8em -1.8em 0 0em rgba(49, 46, 56, 0.2),
        2.5em 0em 0 0em rgba(49, 46, 56, 0.5),
        1.75em 1.75em 0 0em rgba(49, 46, 56, 0.7), 0em 2.5em 0 0em #312e38,
        -1.8em 1.8em 0 0em rgba(49, 46, 56, 0.2),
        -2.6em 0em 0 0em rgba(49, 46, 56, 0.2),
        -1.8em -1.8em 0 0em rgba(49, 46, 56, 0.2);
    }
    62.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(49, 46, 56, 0.2),
        1.8em -1.8em 0 0em rgba(49, 46, 56, 0.2),
        2.5em 0em 0 0em rgba(49, 46, 56, 0.2),
        1.75em 1.75em 0 0em rgba(49, 46, 56, 0.5),
        0em 2.5em 0 0em rgba(49, 46, 56, 0.7), -1.8em 1.8em 0 0em #312e38,
        -2.6em 0em 0 0em rgba(49, 46, 56, 0.2),
        -1.8em -1.8em 0 0em rgba(49, 46, 56, 0.2);
    }
    75% {
      box-shadow: 0em -2.6em 0em 0em rgba(49, 46, 56, 0.2),
        1.8em -1.8em 0 0em rgba(49, 46, 56, 0.2),
        2.5em 0em 0 0em rgba(49, 46, 56, 0.2),
        1.75em 1.75em 0 0em rgba(49, 46, 56, 0.2),
        0em 2.5em 0 0em rgba(49, 46, 56, 0.5),
        -1.8em 1.8em 0 0em rgba(49, 46, 56, 0.7), -2.6em 0em 0 0em #312e38,
        -1.8em -1.8em 0 0em rgba(49, 46, 56, 0.2);
    }
    87.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(49, 46, 56, 0.2),
        1.8em -1.8em 0 0em rgba(49, 46, 56, 0.2),
        2.5em 0em 0 0em rgba(49, 46, 56, 0.2),
        1.75em 1.75em 0 0em rgba(49, 46, 56, 0.2),
        0em 2.5em 0 0em rgba(49, 46, 56, 0.2),
        -1.8em 1.8em 0 0em rgba(49, 46, 56, 0.5),
        -2.6em 0em 0 0em rgba(49, 46, 56, 0.7), -1.8em -1.8em 0 0em #312e38;
    }
  }
  @keyframes loadBullets {
    0%,
    100% {
      box-shadow: 0em -2.6em 0em 0em #312e38,
        1.8em -1.8em 0 0em rgba(49, 46, 56, 0.2),
        2.5em 0em 0 0em rgba(49, 46, 56, 0.2),
        1.75em 1.75em 0 0em rgba(49, 46, 56, 0.2),
        0em 2.5em 0 0em rgba(49, 46, 56, 0.2),
        -1.8em 1.8em 0 0em rgba(49, 46, 56, 0.2),
        -2.6em 0em 0 0em rgba(49, 46, 56, 0.5),
        -1.8em -1.8em 0 0em rgba(49, 46, 56, 0.7);
    }
    12.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(49, 46, 56, 0.7),
        1.8em -1.8em 0 0em #312e38, 2.5em 0em 0 0em rgba(49, 46, 56, 0.2),
        1.75em 1.75em 0 0em rgba(49, 46, 56, 0.2),
        0em 2.5em 0 0em rgba(49, 46, 56, 0.2),
        -1.8em 1.8em 0 0em rgba(49, 46, 56, 0.2),
        -2.6em 0em 0 0em rgba(49, 46, 56, 0.2),
        -1.8em -1.8em 0 0em rgba(49, 46, 56, 0.5);
    }
    25% {
      box-shadow: 0em -2.6em 0em 0em rgba(49, 46, 56, 0.5),
        1.8em -1.8em 0 0em rgba(49, 46, 56, 0.7), 2.5em 0em 0 0em #312e38,
        1.75em 1.75em 0 0em rgba(49, 46, 56, 0.2),
        0em 2.5em 0 0em rgba(49, 46, 56, 0.2),
        -1.8em 1.8em 0 0em rgba(49, 46, 56, 0.2),
        -2.6em 0em 0 0em rgba(49, 46, 56, 0.2),
        -1.8em -1.8em 0 0em rgba(49, 46, 56, 0.2);
    }
    37.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(49, 46, 56, 0.2),
        1.8em -1.8em 0 0em rgba(49, 46, 56, 0.5),
        2.5em 0em 0 0em rgba(49, 46, 56, 0.7), 1.75em 1.75em 0 0em #312e38,
        0em 2.5em 0 0em rgba(49, 46, 56, 0.2),
        -1.8em 1.8em 0 0em rgba(49, 46, 56, 0.2),
        -2.6em 0em 0 0em rgba(49, 46, 56, 0.2),
        -1.8em -1.8em 0 0em rgba(49, 46, 56, 0.2);
    }
    50% {
      box-shadow: 0em -2.6em 0em 0em rgba(49, 46, 56, 0.2),
        1.8em -1.8em 0 0em rgba(49, 46, 56, 0.2),
        2.5em 0em 0 0em rgba(49, 46, 56, 0.5),
        1.75em 1.75em 0 0em rgba(49, 46, 56, 0.7), 0em 2.5em 0 0em #312e38,
        -1.8em 1.8em 0 0em rgba(49, 46, 56, 0.2),
        -2.6em 0em 0 0em rgba(49, 46, 56, 0.2),
        -1.8em -1.8em 0 0em rgba(49, 46, 56, 0.2);
    }
    62.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(49, 46, 56, 0.2),
        1.8em -1.8em 0 0em rgba(49, 46, 56, 0.2),
        2.5em 0em 0 0em rgba(49, 46, 56, 0.2),
        1.75em 1.75em 0 0em rgba(49, 46, 56, 0.5),
        0em 2.5em 0 0em rgba(49, 46, 56, 0.7), -1.8em 1.8em 0 0em #312e38,
        -2.6em 0em 0 0em rgba(49, 46, 56, 0.2),
        -1.8em -1.8em 0 0em rgba(49, 46, 56, 0.2);
    }
    75% {
      box-shadow: 0em -2.6em 0em 0em rgba(49, 46, 56, 0.2),
        1.8em -1.8em 0 0em rgba(49, 46, 56, 0.2),
        2.5em 0em 0 0em rgba(49, 46, 56, 0.2),
        1.75em 1.75em 0 0em rgba(49, 46, 56, 0.2),
        0em 2.5em 0 0em rgba(49, 46, 56, 0.5),
        -1.8em 1.8em 0 0em rgba(49, 46, 56, 0.7), -2.6em 0em 0 0em #312e38,
        -1.8em -1.8em 0 0em rgba(49, 46, 56, 0.2);
    }
    87.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(49, 46, 56, 0.2),
        1.8em -1.8em 0 0em rgba(49, 46, 56, 0.2),
        2.5em 0em 0 0em rgba(49, 46, 56, 0.2),
        1.75em 1.75em 0 0em rgba(49, 46, 56, 0.2),
        0em 2.5em 0 0em rgba(49, 46, 56, 0.2),
        -1.8em 1.8em 0 0em rgba(49, 46, 56, 0.5),
        -2.6em 0em 0 0em rgba(49, 46, 56, 0.7), -1.8em -1.8em 0 0em #312e38;
    }
  }
`;
