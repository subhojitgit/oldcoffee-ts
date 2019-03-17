import { action } from 'typesafe-actions';

import { ADD, INCREMENT } from '../util/constants';

export const LOGIN_ACTION = 'login_action';


export const login = () => ({
  type: LOGIN_ACTION,
});
