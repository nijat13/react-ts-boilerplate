import { call, put, select, takeLatest } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { decrementCounter, incrementCounter } from "network/requests";
import { counterValueSelector, decrement, increment, setCount } from "./counter.slice";
import { ICounter } from "network/types";

// Handlers
export function* handleIncrement() {
  try {
    let counterValue: number = yield select(counterValueSelector);
    counterValue++;
    const serverPayload: ICounter = {
      value: counterValue
    };
    console.log('pre response: ', serverPayload);
    const response: AxiosResponse = yield call(incrementCounter, serverPayload);
    const counterData = response.data;
    console.log('response: ', counterData);
    yield put(setCount(counterData.value));
  } catch (error) {
    console.log(error);
  }
}
export function* handleDecrement() {
  try {
    let counterValue: number = yield select(counterValueSelector);
    counterValue--;
    const serverPayload: ICounter = {
      value: counterValue
    };
    const response: AxiosResponse = yield call(decrementCounter, serverPayload);
    const counterData = response.data;
    console.log('decrement response: ', counterData);
    yield put(setCount(counterData.value));
  } catch (error) {
    console.log(error);
  }
}

// Watchers
export default function* counterSaga() {
  yield takeLatest(increment.type, handleIncrement)
  yield takeLatest(decrement.type, handleDecrement)
}