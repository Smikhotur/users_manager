import { takeEvery, call, put } from 'redux-saga/effects';

import {
  editUserFeatch,
  getUserFeatch,
  getUsersFailure,
  getUsersFeatch,
  getUsersSuccess,
  getUserSuccess,
  removeUserFeatch,
  setUserPostFeatch,
} from '../reducers/UserSlice';
import { UserApi } from '../../services/async-api-users';
import { IUsers } from '../../interface';
import {
  IPayloadStrinOrNumber,
  IWorkerEditUserFetch,
  IWorkerPostUserFetch,
} from '../actionTypes/actionTypes';

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
    yield call(UserApi.postUser, payload);
  } catch (error) {
    yield put(getUsersFailure(error));
  }
}

function* workerRemoveUserFetch({ payload }: IPayloadStrinOrNumber) {
  try {
    yield call(UserApi.removeUser, payload.id);
  } catch (error) {
    yield put(getUsersFailure(error));
  }
}

function* workerEditUserFetch({ payload }: IWorkerEditUserFetch) {
  try {
    yield call(UserApi.editUser, payload.id, payload.data);
    // yield put(getUserSuccess(payload.data));
  } catch (error) {
    yield put(getUsersFailure(error));
  }
}

function* workerGetUserFetch({ payload }: IPayloadStrinOrNumber) {
  try {
    const data: IUsers = yield call(UserApi.getUser, payload.id);
    yield put(getUserSuccess(data));
  } catch (error) {
    yield put(getUsersFailure(error));
  }
}

export function* userWatcher() {
  yield takeEvery(getUsersFeatch.type, workerGetUsersFetch);
  yield takeEvery(setUserPostFeatch.type, workerPostUserFetch);
  yield takeEvery(removeUserFeatch.type, workerRemoveUserFetch);
  yield takeEvery(editUserFeatch.type, workerEditUserFetch);
  yield takeEvery(getUserFeatch.type, workerGetUserFetch);
}
