import {
  AsyncGetWordsAction,
  AsyncGetWordsErrorAction,
  AsyncSetWordAction,
  GetWords,
  GetWordsAction,
  GetWordsErrorAction,
  SetWordAction,
  SetWord,
  AllWords,
  AllWordsFromSessionAction,
  AsyncAllWordsFromSessionAction,
  ClearWordsAction,
  QuessedWords,
  SetQuessedWordsAction,
  SetUnpredictableWordsAction,
  UnpredictableWords,
  ScoreType,
  SetScoreAction,
} from '@type/types.d';
import { ActionTypes } from './constans.d';

export const GetWordsActions = (words: GetWords | null): GetWordsAction => ({
  type: ActionTypes.GET_WORDS,
  payload: words,
});

export const SetWordActions = (word: SetWord | null): SetWordAction => ({
  type: ActionTypes.SET_WORDS,
  payload: word,
});

export const AllWordsFromSessionActions = (
  allWords: AllWords | null,
): AllWordsFromSessionAction => ({
  type: ActionTypes.ALL_WORDS_SESSION,
  payload: allWords,
});

export const GetWordsErrorActions = (): GetWordsErrorAction => ({
  type: ActionTypes.GET_WORDS_ERROR,
});

export const AsyncGetWordsActions = (
  words: GetWords | null,
): AsyncGetWordsAction => ({
  type: ActionTypes.ASYNC_GET_WORDS,
  payload: words,
});

export const AsyncSetWordActions = (
  setWord: string | SetWord | null,
): AsyncSetWordAction => ({
  type: ActionTypes.ASYNC_SET_WORDS,
  payload: setWord,
});

export const AsyncAllWordsFromSessionActions = (
  allWords: AllWords | null,
): AsyncAllWordsFromSessionAction => ({
  type: ActionTypes.ASYNC_ALL_WORDS_SESSION,
  payload: allWords,
});

export const AsyncGetWordsErrorActions = (): AsyncGetWordsErrorAction => ({
  type: ActionTypes.ASYNC_GET_WORDS_ERROR,
});

export const ClearWordsActions = (): ClearWordsAction => ({
  type: ActionTypes.CLEAR_WORDS,
});

export const SetGuessedWordsActions = (
  quessedWords: QuessedWords | null,
): SetQuessedWordsAction => ({
  type: ActionTypes.QUESSED_WORDS,
  payload: quessedWords,
});

export const SetUnpredictableWordsActions = (
  unpredWords: UnpredictableWords | null,
): SetUnpredictableWordsAction => ({
  type: ActionTypes.UNPREDICTABLE_WORDS,
  payload: unpredWords,
});

export const SetScoreActions = (score: ScoreType): SetScoreAction => ({
  type: ActionTypes.SET_SCORE,
  payload: score,
});
