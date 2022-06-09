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
import {
  editUserAPI,
  getUserAPI,
  getUsersAPI,
  postUserAPI,
  removeUserAPI,
} from '../../services/async-api-users';
import { ICreateUser } from '../../interface';

function* workerGetUsersFetch(): any {
  const respons = yield call(getUsersAPI);

  if (respons.status === 200) {
    yield put(getUsersSuccess(respons.data));
  } else {
    yield put(getUsersFailure(respons.message));
  }
}

function* workerPostUserFetch(actions: {
  payload: ICreateUser;
  type: string;
}): any {
  const respons = yield call(postUserAPI, actions.payload);
  if (respons.status === 200) {
    yield put(getUsersSuccess(respons.data));
  } else {
    yield put(getUsersFailure(respons.message));
  }
}

function* workerRemoveUserFetch(actions: {
  payload: { id: number };
  type: string;
}): any {
  const respons = yield call(removeUserAPI, actions.payload.id);

  // if (respons.status === 200) {
  //   yield put(getUsersSuccess(respons.data));
  // } else {
  //   yield put(getUsersFailure(respons.message));
  // }
}

function* workerEditUserFetch(actions: {
  payload: { id: number; data: ICreateUser };
  type: string;
}): any {
  console.log(actions);
  const respons = yield call(
    editUserAPI,
    actions.payload.id,
    actions.payload.data
  );
  if (respons.status === 200) {
    yield put(getUsersSuccess(respons.data));
  } else {
    yield put(getUsersFailure(respons.message));
  }
}

function* workerGetUserFetch(actions: {
  payload: { id: number };
  type: string;
}): any {
  const respons = yield call(getUserAPI, actions.payload.id);
  if (respons.status === 200) {
    yield put(getUserSuccess(respons.data));
  } else {
    yield put(getUsersFailure(respons.message));
  }
}

export function* userWatcher() {
  yield takeEvery(getUsersFeatch.type, workerGetUsersFetch);
  yield takeEvery(setUserPostFeatch.type, workerPostUserFetch);
  yield takeEvery(removeUserFeatch.type, workerRemoveUserFetch);
  yield takeEvery(editUserFeatch.type, workerEditUserFetch);
  yield takeEvery(getUserFeatch.type, workerGetUserFetch);
}
