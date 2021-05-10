import { Adaptive } from '@core/constants/adaptive';
import styled from 'styled-components';

const Style = {
  Buttons: styled.div`
    max-width: 800px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    & > button {
      font-size: 20px;
      height: 40px;
    }
    @media (max-width: ${Adaptive.smartphone}) {
      text-align: center;
      flex-direction: column;
      justify-content: center;
      height: 300px;
    }
  `,
  Header: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `,
};

export default Style;
