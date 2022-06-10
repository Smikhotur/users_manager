import { IUsers } from '../../interface';
import { StrinOrNumber } from '../actionTypes/actionTypes';
import {
  EActionUser,
  IPostUserAction,
  IRemoveUserAction,
  ISetUserAction,
} from './UserActionTypes';

export const setUserAction = (payload: StrinOrNumber): ISetUserAction => ({
  type: EActionUser.GET_USER,
  payload,
});

export const postUserAction = (payload: IUsers): IPostUserAction => ({
  type: EActionUser.POST_USER,
  payload,
});

export const removeUserAction = (
  payload: StrinOrNumber | undefined
): IRemoveUserAction => ({
  type: EActionUser.REMOVE_USER,
  payload,
});
