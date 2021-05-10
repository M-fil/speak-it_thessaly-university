import { Adaptive } from '@core/constants/adaptive';
import styled from 'styled-components';

const Style = {
  Buttons: styled.div`
    width: 600px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & > #buttonSpeak {
      width: 300px;
    }
    & > button {
      font-size: 20px;
      height: 40px;
    }
    @media (max-width: ${Adaptive.smartphone}) {
      flex-direction: column;
      flex-wrap: wrap;
      width: 290px;
      height: 150px;
      & > #buttonSpeak {
        width: 200px;
      }
      margin-top: 550px;
    }
  `,
};

export default Style;
