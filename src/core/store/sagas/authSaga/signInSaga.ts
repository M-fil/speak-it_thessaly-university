import toast from 'react-hot-toast';
import { signInEmailAndPassword } from '@firebaseConfig/firebaseAuthQueries';
import { call, put, takeLatest } from '@redux-saga/core/effects';
import { signErrorAction, signInAction } from '@store/actions/authActions';
import { ActionTypes } from '@store/actions/constans.d';
import { AsyncSignInAction } from '@type/types';

export function* workerAuthSignIn(action: AsyncSignInAction): Generator {
  const { email, password } = action.payload;

  try {
    const authChannel = yield call(signInEmailAndPassword, email, password);
    console.log('signInEmailAndPassword', authChannel);
    if (authChannel) {
      yield put(signInAction(authChannel));
    }
  } catch (error: Error | unknown) {
    if (error instanceof Error) {
      toast.error(error.message);
      yield put(signErrorAction());
    }
  }
}

export default function* watchAuthSignIn(): Generator {
  yield takeLatest(ActionTypes.ASYNC_SIGN_IN, workerAuthSignIn);
}
