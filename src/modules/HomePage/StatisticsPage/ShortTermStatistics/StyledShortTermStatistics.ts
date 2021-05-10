import styled from 'styled-components';
import { Color } from '@constants/colors';
import { Adaptive } from '@core/constants/adaptive';

const Style = {
  Container: styled.div`
    max-width: 300px;
    max-height: 600px;
    overflow: scroll;
    margin: 0 auto;
    @media (max-width: ${Adaptive.notebook}) {
      max-height: 500px;
    }
  `,
  Words: styled.div`
    max-width: 250px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    margin: 0 auto;
  `,
  UnpredWords: styled.span`
    background-color: ${Color.UnpredWords};
  `,
  GuessedWords: styled.span`
    background-color: ${Color.GuessedWords};
  `,
  Buttons: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,
};

export default Style;
