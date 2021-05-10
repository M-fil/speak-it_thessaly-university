const initialState: AuthState = {
  login: false as boolean,
  user: null as null,
};
import { ActionTypes } from '@store/actions/constans.d';
import { AuthActions, AuthState } from '@type/types';

const currentAuth = (
  state: AuthState = initialState,
  action: AuthActions,
): AuthState => {
  switch (action.type) {
    case ActionTypes.SIGN_IN: {
      return {
        ...state,
        login: true,
        user: action.payload,
      };
    }
    case ActionTypes.SIGN_OUT: {
      return {
        ...state,
        login: false,
        user: null,
      };
    }
    case ActionTypes.RESET_PASSW: {
      return {
        ...state,
        login: false,
      };
    }
    case ActionTypes.SIGN_UP: {
      return {
        ...state,
        login: true,
        user: action.payload,
      };
    }
    case ActionTypes.SIGN_ERROR: {
      return {
        ...state,
        login: false,
      };
    }
    default:
      return state;
  }
};

export default currentAuth;
