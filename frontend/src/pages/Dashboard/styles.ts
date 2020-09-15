import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div``;

export const Content = styled.main`
  max-width: 1120px;
  margin: 64px auto;
  display: flex;
`;

export const Schedule = styled.div`
  flex: 1;
  margin-right: 120px;

  h1 {
    color: ${colors.dashTitleh1};
    font-size: 36px;
  }

  p {
    color: ${colors.brand};
    display: flex;
    margin-top: 8px;

    span {
      align-items: center;
      display: flex;
      font-weight: 500;
    }

    span + span::before {
      background-color: ${colors.brand};
      content: '';
      height: 12px;
      margin: 0 8px;
      width: 1px;
    }
  }
`;

export const NextAppointment = styled.div`
  margin-top: 64px;

  h2 {
    color: ${colors.dashTitleh2};
    font-size: 20px;
    font-weight: 400;
  }

  div {
    align-items: center;
    background-color: ${colors.dashBgNext};
    border-radius: 10px;
    display: flex;
    margin-top: 24px;
    padding: 16px 24px;
    position: relative;

    &:before {
      background-color: ${colors.brand};
      border-radius: 10px;
      content: '';
      height: 80%;
      left: 0;
      position: absolute;
      top: 10%;
      width: 2px;
    }

    img {
      border-radius: 50%;
      height: 80px;
      width: 80px;
    }

    strong {
      color: ${colors.white};
      font-size: 24px;
      margin-left: 24px;
    }

    span {
      color: ${colors.dashTxtClock};
      font-size: 20px;
      margin-left: auto;
      display: flex;
      align-items: center;

      svg {
        color: ${colors.brand};
        margin-right: 8px;
      }
    }
  }
`;

export const Calendar = styled.aside`
  width: 380px;
`;
