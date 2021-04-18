import { all, fork } from 'redux-saga/effects';

// listeners
import counterSaga from './counter/counter.saga';

export default function* rootSaga() {
  yield all([
    fork(counterSaga)
  ]);
}