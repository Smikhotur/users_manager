import { all, fork } from 'redux-saga/effects';
import { userWatcher } from './saga/usersSaga';

export default function* rootSaga() {
  yield all([fork(userWatcher)]);
}
