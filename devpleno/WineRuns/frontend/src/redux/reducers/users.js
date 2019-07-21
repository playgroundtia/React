import { createReducer } from 'reduxsauce';
import { Types } from '../actionsCreators';

export const INITIAL_STATE = {
  isLoading: false,
  isSaving: false,
  isDelete: false,
  data: [],
  error: false,
  errorMessage: '',
  saved: false,
  deleted: false,
};

export const getUsersRequest = (state = INITIAL_STATE) => {
  return {
    ...state,
    isLoading: true,
    isDelete: false,
    deleted: false,
  };
};

export const getUsersSuccess = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isLoading: false,
    data: action.users,
  };
};

export const getUsersFailure = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isLoading: false,
    error: true,
    errorMessage: action.error,
  };
};

export const createUserRequest = (state = INITIAL_STATE) => {
  return {
    ...state,
    isSaving: true,
    saved: false,
    error: false,
    errorMessage: '',
  };
};

export const createUserSuccess = (state = INITIAL_STATE) => {
  return {
    ...state,
    isSaving: false,
    saved: true,
  };
};

export const createUserFailure = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isSaving: false,
    saved: false,
    error: true,
    errorMessage: action.error,
  };
};

export const updateUserRequest = (state = INITIAL_STATE) => {
  return {
    ...state,
    isSaving: true,
    saved: false,
    error: false,
    errorMessage: '',
  };
};

export const updateUserSuccess = (state = INITIAL_STATE) => {
  return {
    ...state,
    isSaving: false,
    saved: true,
  };
};

export const updateUserFailure = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isSaving: false,
    saved: false,
    error: true,
    errorMessage: action.error,
  };
};

export const deleteUserRequest = (state = INITIAL_STATE) => {
  return {
    ...state,
    isDelete: true,
    deleted: false,
    error: false,
    errorMessage: '',
  };
};

export const deleteUserSuccess = (state = INITIAL_STATE) => {
  return {
    ...state,
    isDelete: false,
    deleted: true,
  };
};

export const deleteUserFailure = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isDelete: false,
    deleted: false,
    error: true,
    errorMessage: action.error,
  };
};

export const HANDLERS = {
  [Types.GET_USERS_REQUEST]: getUsersRequest,
  [Types.GET_USERS_SUCCESS]: getUsersSuccess,
  [Types.GET_USERS_FAILURE]: getUsersFailure,
  // Create
  [Types.CREATE_USER_REQUEST]: createUserRequest,
  [Types.CREATE_USER_SUCCESS]: createUserSuccess,
  [Types.CREATE_USER_FAILURE]: createUserFailure,
  // Update
  [Types.UPDATE_USER_REQUEST]: updateUserRequest,
  [Types.UPDATE_USER_SUCCESS]: updateUserSuccess,
  [Types.UPDATE_USER_FAILURE]: updateUserFailure,
  // // Delete
  [Types.DELETE_USER_REQUEST]: deleteUserRequest,
  [Types.DELETE_USER_SUCCESS]: deleteUserSuccess,
  [Types.DELETE_USER_FAILURE]: deleteUserFailure,
};

export default createReducer(INITIAL_STATE, HANDLERS);
