import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.header`
  background-color: ${colors.headerBg};
  padding: 32px 0;
`;

export const Content = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1120px;
  padding: 10px;
  align-items: center;

  > img {
    height: 80px;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;

  > img {
    border-radius: 50%;
    height: 56px;
    margin-right: 16px;
    width: 56px;
  }

  > div {
    display: flex;
    flex-direction: column;
    line-height: 26px;
  }

  span {
    color: ${colors.headerTxt};
  }

  strong {
    color: ${colors.brand};
  }
`;

export const Logout = styled.button`
  background-color: transparent;
  border: 0;
  color: ${colors.headerBtn};
  height: 50px;
  margin-left: auto;
  width: 50px;
  transition: color 300ms ease;

  &:hover {
    color: ${colors.danger};
  }
`;
