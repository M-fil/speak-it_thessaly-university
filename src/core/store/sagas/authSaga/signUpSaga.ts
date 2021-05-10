import { signUpEmailAndPassword } from '@firebaseConfig/firebaseAuthQueries';
import { call, put, takeLatest } from '@redux-saga/core/effects';
import { signErrorAction, signUpAction } from '@store/actions/authActions';
import { ActionTypes } from '@store/actions/constans.d';
import { AsyncSignUpAction } from '@type/types';

export const workerAuthSignUp = function* (
  action: AsyncSignUpAction,
): Generator {
  const { email, password } = action.payload;
  try {
    const authChannel = yield call(signUpEmailAndPassword, email, password);
    if (authChannel) {
      yield put(signUpAction(authChannel));
    }
  } catch {
    yield put(signErrorAction());
  }
};

export default function* watchAuthSignUp(): Generator {
  yield takeLatest(ActionTypes.ASYNC_SIGN_UP, workerAuthSignUp);
}
