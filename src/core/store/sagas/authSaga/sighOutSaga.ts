import { signOut } from '@firebaseConfig/firebaseAuthQueries';
import { call, put, takeLatest } from '@redux-saga/core/effects';
import { signErrorAction, signOutAction } from '@store/actions/authActions';
import { ActionTypes } from '@store/actions/constans.d';

export const workerAuthSignOut = function* (): Generator {
  try {
    yield call(signOut);
    yield put(signOutAction());
  } catch {
    yield put(signErrorAction());
  }
};

export default function* watchAuthSignOut(): Generator {
  yield takeLatest(ActionTypes.ASYNC_SIGN_OUT, workerAuthSignOut);
}
