import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { WordsObject } from '@type/types';
import {
  SetGuessedWordsActions,
  SetScoreActions,
  SetUnpredictableWordsActions,
} from '@store/actions/wordsActions';
import Style from './StyledScore';

const Score: React.FC = () => {
  const getAllQuessedWords = useSelector(
    (state: RootStateOrAny) => state.currentWords.quessedWords,
  );

  const getWordsFetch = useSelector(
    (state: RootStateOrAny) => state.currentWords.words,
  );

  const speechWord = useSelector(
    (state: RootStateOrAny) => state.currentWords.setWord,
  );

  const getAllWords = useSelector(
    (state: RootStateOrAny) => state.currentWords.allWords,
  );

  const [score, setScore] = useState(0);
  const [word, setWord] = useState('');
  const [unpredWords, setUnpredWords] = useState([]);
  const [guessedWords, setGuessedWords] = useState([]);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    setUnpredWords(
      getAllWords.filter(
        (item: WordsObject) =>
          !getAllQuessedWords.some((elem: WordsObject) => elem === item),
      ),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getAllWords, guessedWords]);

  useEffect(() => {
    setWord(speechWord);
    unpredWords.map((item: WordsObject) => {
      if (word.indexOf(item.word) >= 0) {
        setGuessedWords([item]);
      }
    });
  }, [speechWord, unpredWords, word]);
  console.log(word);

  useEffect(() => {
    setUnpredWords(
      unpredWords.filter((elem: WordsObject) => !guessedWords.includes(elem)),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [guessedWords]);

  useEffect(() => {
    unpredWords.map((item: WordsObject) => {
      if (word) {
        if (word.indexOf(item.word) >= 0) {
          const fractionalPart = Number(getWordsFetch[0].group);
          const wholePart = 10;
          const numberOfPoints = (
            (wholePart + fractionalPart) /
            wholePart
          ).toFixed(1);
          setScore(
            (prevNumberOfPoints: number) =>
              Number(prevNumberOfPoints) + Number(numberOfPoints),
          );
          toast.success(`${t('Score.addScore')}`);
        }
      }
    });
  }, [getWordsFetch, t, unpredWords, word]);

  useEffect(() => {
    dispatch(SetGuessedWordsActions(guessedWords));
    dispatch(SetUnpredictableWordsActions(unpredWords));
    dispatch(SetScoreActions(score));
  }, [dispatch, unpredWords, guessedWords, score]);

  return (
    <>
      <Toaster />
      <Style.Maintext>
        {t('Score.mainTetx')}: {score}
      </Style.Maintext>
    </>
  );
};

export default Score;
