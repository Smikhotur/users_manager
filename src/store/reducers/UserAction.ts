import { StrinOrNumber } from '../actionTypes/actionTypes';
import { EActionUser, ISetUserAction } from './UserActionTypes';

export const setUserAction = (payload: StrinOrNumber): ISetUserAction => ({
  type: EActionUser.REMOVE_USER,
  payload,
});
