import { resetPassword } from '@firebaseConfig/firebaseAuthQueries';
import { call, put, takeLatest } from '@redux-saga/core/effects';
import {
  resetPasswordAction,
  signErrorAction,
} from '@store/actions/authActions';
import { ActionTypes } from '@store/actions/constans.d';
import { AsyncResetPasswordAction } from '@type/types';

export const workerAuthResetPassword = function* (
  action: AsyncResetPasswordAction,
): Generator {
  const { email } = action.payload;
  try {
    yield call(resetPassword, email);
    yield put(resetPasswordAction());
  } catch {
    yield put(signErrorAction());
  }
};

export default function* watchAuthResetPassword(): Generator {
  yield takeLatest(ActionTypes.ASYNC_RESET_PASSWORD, workerAuthResetPassword);
}
