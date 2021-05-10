import { put, takeLatest } from '@redux-saga/core/effects';
import { ActionTypes } from '@store/actions/constans.d';
import {
  GetWordsErrorActions,
  AllWordsFromSessionActions,
} from '@store/actions/wordsActions';
import { AsyncAllWordsFromSessionAction } from '@type/types';

export const workerAllWordsAsync = function* (
  action: AsyncAllWordsFromSessionAction,
): Generator {
  try {
    yield put(AllWordsFromSessionActions(action.payload));
  } catch {
    yield put(GetWordsErrorActions());
  }
};

export default function* watchAllWords(): Generator {
  yield takeLatest(ActionTypes.ASYNC_ALL_WORDS_SESSION, workerAllWordsAsync);
}
