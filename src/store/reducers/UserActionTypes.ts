import { Action } from 'redux';
import { StrinOrNumber } from '../actionTypes/actionTypes';

export enum EActionUser {
  REMOVE_USER = 'user/REMOVE_USER',
}

export interface ISetUserAction extends Action<EActionUser> {
  type: EActionUser.REMOVE_USER;
  payload: StrinOrNumber;
}
