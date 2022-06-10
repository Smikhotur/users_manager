import { Action } from 'redux';
import { IUsers } from '../../interface';
import { StrinOrNumber } from '../actionTypes/actionTypes';

export enum EActionUser {
  REMOVE_USER = 'user/REMOVE_USER',
  GET_USER = 'user/GET_USER',
  POST_USER = 'user/POST_USER',
}

export interface ISetUserAction extends Action<EActionUser> {
  type: EActionUser.GET_USER;
  payload: StrinOrNumber;
}

export interface IPostUserAction extends Action<EActionUser> {
  type: EActionUser.POST_USER;
  payload: IUsers;
}

export interface IRemoveUserAction extends Action<EActionUser> {
  type: EActionUser.REMOVE_USER;
  payload: StrinOrNumber | undefined;
}
