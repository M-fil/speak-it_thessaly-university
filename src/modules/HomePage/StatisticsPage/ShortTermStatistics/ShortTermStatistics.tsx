import React, { useCallback, useEffect, useState, MouseEvent } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { SoundOutlined } from '@ant-design/icons';
import { wordsURL } from '@modules/HomePage/WordsList/constants';
import { useHistory } from 'react-router';
import Style from './StyledShortTermStatistics';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import { MainRoutes } from '@core/constants/routes';

const ShortTermStatistics: React.FC = () => {
  const [guessedWords, setGuessedWords] = useState([]);
  const [unpredWords, setUnpredWords] = useState([]);
  const history = useHistory();
  const { t } = useTranslation();

  const getAllQuessedWords = useSelector(
    (state: RootStateOrAny) => state.currentWords.quessedWords,
  );

  const getAllUnpredictableWords = useSelector(
    (state: RootStateOrAny) => state.currentWords.unpredWords,
  );

  useEffect(() => {
    setGuessedWords(getAllQuessedWords);
    setUnpredWords(getAllUnpredictableWords);
  }, [getAllQuessedWords, getAllUnpredictableWords]);

  const audioPlay = useCallback(url => {
    const audio = new Audio(wordsURL.audioUrl + url);
    audio.play();
  }, []);

  const handlerAudioButtons = useCallback(
    (audio: string) => (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      audioPlay(audio);
    },
    [audioPlay],
  );

  const hanlderBackButton = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      history.push(MainRoutes.mainPage);
    },
    [history],
  );

  const hanlderStatisticsButton = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      history.push(MainRoutes.longTermStatistics);
    },
    [history],
  );

  return (
    <>
      <Style.Buttons>
        <Button type="primary" onClick={hanlderBackButton}>
          {t('ShortStatistics.buttonReturn')}
        </Button>
        <Button type="primary" onClick={hanlderStatisticsButton}>
          {t('ShortStatistics.buttonStatistics')}
        </Button>
      </Style.Buttons>
      <h1>
        {t('Statistics.unpredWords')}
        <Style.UnpredWords>{unpredWords.length}</Style.UnpredWords>
      </h1>
      <Style.Container>
        {unpredWords &&
          unpredWords.map(res => {
            return (
              <Style.Words key={res.id}>
                <SoundOutlined onClick={handlerAudioButtons(res.audio)} />
                <p>{res.word}</p>
                <p>{res.transcription}</p>
              </Style.Words>
            );
          })}
      </Style.Container>
      <h1>
        {t('Statistics.guessedWords')}
        <Style.GuessedWords>{guessedWords.length}</Style.GuessedWords>
      </h1>
      <Style.Container>
        {guessedWords &&
          guessedWords.map((res, i) => {
            return (
              <Style.Words key={i}>
                <SoundOutlined onClick={handlerAudioButtons(res.audio)} />
                <p>{res.word}</p>
                <p>{res.transcription}</p>
              </Style.Words>
            );
          })}
      </Style.Container>
    </>
  );
};

export default ShortTermStatistics;
