import { takeEvery, call, put } from 'redux-saga/effects';

import {
  editUserFeatch,
  getUsersFailure,
  getUsersFeatch,
  getUsersSuccess,
  getUserSuccess,
  removeUser,
  setUserPostFeatch,
} from '../reducers/UserSlice';
import { UserApi } from '../../services/async-api-users';
import { IUsers } from '../../interface';
import {
  IPayload,
  IPayloadStrinOrNumber,
  IWorkerEditUserFetch,
  IWorkerPostUserFetch,
} from '../actionTypes/actionTypes';
import { EActionUser } from '../reducers/UserActionTypes';

function* workerGetUsersFetch() {
  try {
    const data: IUsers[] = yield call(UserApi.getUsers);
    yield put(getUsersSuccess(data));
  } catch (error) {
    yield put(getUsersFailure(error));
  }
}

function* workerPostUserFetch({ payload }: IWorkerPostUserFetch) {
  try {
    const data: IUsers = yield call(UserApi.postUser, payload);
    yield put(setUserPostFeatch(data));
  } catch (error) {
    yield put(getUsersFailure(error));
  }
}

function* workerRemoveUserFetch({ payload }: IPayload) {
  try {
    console.log(payload);
    yield call(UserApi.removeUser, payload);
    yield put(removeUser(payload));
  } catch (error) {
    yield put(getUsersFailure(error));
  }
}

function* workerEditUserFetch({ payload }: IWorkerEditUserFetch) {
  try {
    yield call(UserApi.editUser, payload.id, payload.data);
    yield put(getUserSuccess(payload.data));
  } catch (error) {
    yield put(getUsersFailure(error));
  }
}

function* workerGetUserFetch({ payload }: IPayloadStrinOrNumber) {
  try {
    const data: IUsers[] = yield call(UserApi.getUser, payload.id);
    yield put(getUserSuccess(data[0]));
  } catch (error) {
    yield put(getUsersFailure(error));
  }
}

export function* userWatcher() {
  yield takeEvery(getUsersFeatch.type, workerGetUsersFetch);
  yield takeEvery(EActionUser.POST_USER, workerPostUserFetch);
  yield takeEvery(EActionUser.REMOVE_USER, workerRemoveUserFetch);
  yield takeEvery(editUserFeatch.type, workerEditUserFetch);
  yield takeEvery(EActionUser.GET_USER, workerGetUserFetch);
}
