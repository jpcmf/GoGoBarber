import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  position: relative;

  span {
    background-color: ${colors.brand};
    border-radius: 4px;
    bottom: calc(100% + 12px);
    color: ${colors.ttTxt};
    font-size: 14px;
    font-weight: 600;
    left: 50%;
    opacity: 0;
    padding: 8px;
    position: absolute;
    transform: translateX(-50%);
    transition: opacity 300ms ease;
    visibility: hidden;
    width: 160px;

    &:after {
      border-color: ${colors.brand} transparent;
      border-style: solid;
      border-width: 6px 6px 0 6px;
      content: '';
      left: 50%;
      position: absolute;
      top: 100%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
