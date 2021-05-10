import styled from 'styled-components';
import { Color } from '@core/constants/colors';
import { Adaptive } from '@core/constants/adaptive';

const Styled = {
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
    width: 200px;
    & > .SignIn {
      width: 200px;
      background: ${Color.AuthButton}
      border: none;
      font-size: 18px;
      height: 30px;
      color: ${Color.AuthButtonText};
      transition: 0.4s linear;
    }
    & > .SignIn:hover {
      color: ${Color.AuthButtonTextHover};
      border: none;
    }
    & > .Google {
      width: 200px;
      background-color: ${Color.AuthGoogleButtonBackgroundColor};
      border: none;
      font-size: 15px;
      height: 40px;
      transition: 0.4s linear;
    }
    & > .Google:hover {
      box-shadow: ${Color.AuthGoogleButtonHover};
    }
    & > .Google > span {
      margin-left: 10px;
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
      box-shadow: none;
      border: none;
    }
  `,
  Title: styled.span`
    font-size: 30px;
    font-style: italic;
  `,
  Links: styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: space-between;
    margin: 20px 0;
  `,
  MainText: styled.div`
    width: 200px;
    text-align: center;
  `,
};

export default Styled;
