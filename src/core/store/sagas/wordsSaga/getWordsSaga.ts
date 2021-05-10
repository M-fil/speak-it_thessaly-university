import { call, put, takeLatest } from '@redux-saga/core/effects';
import { ActionTypes } from '@store/actions/constans.d';
import {
  GetWordsActions,
  GetWordsErrorActions,
} from '@store/actions/wordsActions';
import { AsyncGetWordsAction } from '@type/types';
import { wordsUrl } from './constants';

export const fetchWordsAsync = function* (
  action: AsyncGetWordsAction,
): Generator {
  try {
    const group = action.payload;
    const maxGroupNumber = 30;
    const minGroupNumber = 0;
    const wordsFetch = yield call(() => {
      const page =
        Math.floor(
          Math.random() *
            (Math.floor(maxGroupNumber) - Math.ceil(minGroupNumber)),
        ) + Math.ceil(minGroupNumber);
      const url = wordsUrl + `page=${page}` + `&group=${group}`;
      return fetch(url).then(res => res.json());
    });
    const maxWordCount = 10;
    const words = Object.values(wordsFetch);
    const numbers = new Set();
    while (numbers.size < maxWordCount) {
      const randomWord = Math.floor(Math.random() * words.length);
      const items = words[randomWord];
      numbers.add(items);
    }
    const arr: unknown = Array.from(numbers);
    yield put(GetWordsActions(arr));
  } catch {
    yield put(GetWordsErrorActions());
  }
};

export default function* watchWordsGet(): Generator {
  yield takeLatest(ActionTypes.ASYNC_GET_WORDS, fetchWordsAsync);
}
