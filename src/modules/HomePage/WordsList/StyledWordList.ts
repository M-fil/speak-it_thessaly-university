import styled from 'styled-components';
import { Color } from '@constants/colors';
import { Adaptive } from '@core/constants/adaptive';

const Style = {
  Container: styled.div`
    width: 1100px;
    height: 530px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: ${Adaptive.notebook}) {
      width: 700px;
    }
    @media (max-width: ${Adaptive.smartphone}) {
      width: 390px;
      height: 600px;
      justify-content: space-around;
      padding: 0;
    }
  `,
  Groups: styled.div`
    width: 500px;
    margin: 0 auto;
    margin-top: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: ${Adaptive.smartphone}) {
      flex-direction: row;
      flex-wrap: wrap;
      width: 300px;
      & > button {
        margin: 5px;
      }
    }
  `,
  MainImage: styled.div`
    margin: 0 auto;
    text-align: center;
  `,
  WordsContainer: styled.div`
    margin: 0 auto;
    width: 1100px;
    height: 200px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    @media (max-width: ${Adaptive.notebook}) {
      width: 700px;
    }
    @media (max-width: ${Adaptive.smartphone}) {
      flex-wrap: wrap;
      width: 350px;
      height: 200px;
    }
  `,
  Words: styled.div`
    width: 200px;
    max-height: 100px;
    margin: 0 auto;
    margin-bottom: 20px;
    border: ${Color.WordsBorder};
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    @media (max-width: ${Adaptive.notebook}) {
      width: 120px;
    }
    @media (max-width: ${Adaptive.smartphone}) {
      flex-direction: column;
      width: 120px;
    }
  `,
  WordsText: styled.div`
    width: 100px;
    text-align: center;
  `,
  SpokenWord: styled.div`
    width: 100px;
    margin: 0 auto;
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  `,
};

export default Style;
