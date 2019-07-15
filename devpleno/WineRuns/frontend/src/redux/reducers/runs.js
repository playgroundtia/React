import { createReducer } from 'reduxsauce';
import { Types } from '../actionsCreators';

export const INITIAL_STATE = {
  isLoading: false,
  data: [],
  error: false,
  errorMessage: '',
};

export const getRunsRequest = (state = INITIAL_STATE) => {
  return {
    ...state,
    isLoading: true,
  };
};

export const getRunsSuccess = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isLoading: false,
    data: action.runs,
  };
};

export const getRunsFailure = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isLoading: false,
    error: true,
    errorMessage: action.error,
  };
};

export const createRunRequest = (state = INITIAL_STATE) => {
  return {
    ...state,
    isLoading: true,
  };
};

export const createRunSuccess = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isLoading: false,
    data: action.runs,
  };
};

export const createRunFailure = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isLoading: false,
    error: true,
    errorMessage: action.error,
  };
};

export const HANDLERS = {
  [Types.GET_RUNS_REQUEST]: getRunsRequest,
  [Types.GET_RUNS_SUCCESS]: getRunsSuccess,
  [Types.GET_RUNS_FAILURE]: getRunsFailure,
  // Create
  [Types.CREATE_RUN_REQUEST]: createRunRequest,
  [Types.CREATE_RUN_SUCCESS]: createRunSuccess,
  [Types.CREATE_RUN_FAILURE]: createRunFailure,
};

export default createReducer(INITIAL_STATE, HANDLERS);
