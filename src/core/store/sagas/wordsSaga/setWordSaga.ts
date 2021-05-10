import { put, takeLatest } from '@redux-saga/core/effects';
import { ActionTypes } from '@store/actions/constans.d';
import {
  GetWordsErrorActions,
  SetWordActions,
} from '@store/actions/wordsActions';
import { AsyncSetWordAction } from '@type/types';

export const workerSetWordsAsync = function* (
  action: AsyncSetWordAction,
): Generator {
  try {
    yield put(SetWordActions(action.payload));
  } catch {
    yield put(GetWordsErrorActions());
  }
};

export default function* watchWordsSet(): Generator {
  yield takeLatest(ActionTypes.ASYNC_SET_WORDS, workerSetWordsAsync);
}
