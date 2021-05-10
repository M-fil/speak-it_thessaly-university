import styled from 'styled-components';
import { Color } from '@core/constants/colors';
import { Adaptive } from '@core/constants/adaptive';

const Style = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 400px;
    margin: 0 auto;
    height: 500px;
    border-radius: 3px;
    padding-top: 20px;
  `,
  Button: styled.div`
    width: 250px;
    & > .ResetPas {
      width: 200px;
      background: ${Color.AuthButton}
      border: none;
      font-size: 18px;
      height: 30px;
      color: ${Color.AuthButtonText};
      transition: 0.4s linear;
    }
    & > .ResetPas:hover {
      color: ${Color.AuthButtonTextHover};
      border: none;
    }
  `,
  Form: styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    border: 1px solid ${Color.MainAuthBorder};
    padding: 80px;
    box-shadow: ${Color.MainAuthBorder};
    @media (max-width: ${Adaptive.notebook}) {
      padding: 0;
      box-shadow: none;
      border: none;
    }
  `,
  Title: styled.div`
    font-size: 30px;
    font-style: italic;
    padding-bottom: 30px;
  `,
  Links: styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: space-between;
    margin: 20px 0;
  `,
  Accept: styled.span`
    color: ${Color.AuthButtonAccept};
  `,
};

export default Style;
