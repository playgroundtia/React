import { createReducer } from 'reduxsauce';
import { Types } from '../actionsCreators';

export const INITIAL_STATE = {
  isAuthing: false,
  isAuth: false,
  isSigningin: false,
  isModalShow: false,
  user: {},
  error: false,
  errorMessage: '',
};

export const signinRequest = (state = INITIAL_STATE) => {
  return {
    ...state,
    isSigningin: true,
    error: false,
    errorMessage: '',
  };
};

export const signinSuccess = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isSigningin: false,
    isAuth: true,
    user: action.user,
  };
};

export const signinFailure = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isSigningin: false,
    error: true,
    errorMessage: action.error,
  };
};

export const authRequest = (state = INITIAL_STATE) => {
  return {
    ...state,
    isSigningin: true,
    error: false,
    errorMessage: '',
  };
};

export const authSuccess = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isSigningin: false,
    isAuth: true,
    user: action.user,
  };
};

export const authFailure = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isSigningin: false,
    isAuth: false,
    error: true,
    errorMessage: action.error,
  };
};

export const logout = () => {
  return {
    isAuthing: false,
    isAuth: false,
    isSigningin: false,
    isModalShow: false,
    user: {},
    error: false,
    errorMessage: '',
  };
};

export const showModal = (state = INITIAL_STATE) => {
  return {
    ...state,
    isModalShow: true,
  };
};

export const hideModal = (state = INITIAL_STATE) => {
  return {
    ...state,
    isModalShow: false,
  };
};

export const HANDLERS = {
  [Types.SIGNIN_REQUEST]: signinRequest,
  [Types.SIGNIN_SUCCESS]: signinSuccess,
  [Types.SIGNIN_FAILURE]: signinFailure,
  [Types.AUTH_REQUEST]: authRequest,
  [Types.AUTH_SUCCESS]: authSuccess,
  [Types.AUTH_FAILURE]: authFailure,
  [Types.LOGOUT]: logout,
  [Types.SHOW_MODAL]: showModal,
  [Types.HIDE_MODAL]: hideModal,
};

export default createReducer(INITIAL_STATE, HANDLERS);
