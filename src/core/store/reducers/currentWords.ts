import { ScoreType } from './../../type/types.d';
import { ActionTypes } from '@store/actions/constans.d';
import {
  AllWords,
  GetWords,
  QuessedWords,
  SetWord,
  UnpredictableWords,
  WordsActions,
  WordsObject,
} from '@type/types';

export interface WordsState {
  words: GetWords | [];
  setWord: SetWord;
  allWords: AllWords;
  quessedWords: QuessedWords;
  unpredWords: UnpredictableWords;
  score: ScoreType;
}

const initialState: WordsState = {
  allWords: [],
  words: [],
  quessedWords: [],
  unpredWords: [],
  setWord: '',
  score: null as null,
};

const currentWords = (
  state: WordsState = initialState,
  action: WordsActions,
): WordsState => {
  switch (action.type) {
    case ActionTypes.GET_WORDS: {
      return {
        ...state,
        words: action.payload,
      };
    }
    case ActionTypes.SET_WORDS: {
      return {
        ...state,
        setWord: action.payload,
      };
    }
    case ActionTypes.ALL_WORDS_SESSION: {
      return {
        ...state,
        allWords: [
          ...state.allWords,
          ...(action.payload || [])
            .flat()
            .filter(
              (item: WordsObject) =>
                !state.allWords.some(
                  (elem: WordsObject) => item.id === elem.id,
                ),
            ),
        ],
      };
    }
    case ActionTypes.CLEAR_WORDS: {
      return {
        ...state,
        allWords: [],
        words: [],
        quessedWords: [],
        unpredWords: [],
        setWord: '',
        score: null as null,
      };
    }
    case ActionTypes.QUESSED_WORDS: {
      return {
        ...state,
        quessedWords: [
          ...state.quessedWords,
          ...(action.payload || []).filter(
            (item: WordsObject) =>
              !state.quessedWords.some(
                (elem: WordsObject) => item.id === elem.id,
              ),
          ),
        ],
      };
    }
    case ActionTypes.UNPREDICTABLE_WORDS: {
      return {
        ...state,
        unpredWords: action.payload,
      };
    }
    case ActionTypes.SET_SCORE: {
      return {
        ...state,
        score: action.payload,
      };
    }
    default:
      return state;
  }
};

export default currentWords;
