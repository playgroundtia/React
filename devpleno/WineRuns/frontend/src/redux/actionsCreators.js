import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  signinRequest: ['email', 'passwd'],
  signinSuccess: ['user'],
  signinFailure: ['error'],

  logout: null,

  showModal: null,
  hideModal: null,

  authRequest: null,
  authSuccess: ['user'],
  authFailure: ['error'],

  getRunsRequest: null,
  getRunsSuccess: ['runs'],
  getRunsFailure: ['error'],

  createRunRequest: ['run'],
  createRunSuccess: ['run'],
  createRunFailure: ['error'],

  updateRunRequest: ['run'],
  updateRunSuccess: ['run'],
  updateRunFailure: ['error'],

  deleteRunRequest: ['run'],
  deleteRunSuccess: ['runs'],
  deleteRunFailure: ['error'],
});

export default Creators;
