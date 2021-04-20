import { call, put, select, take, takeLatest } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { decrementCounter, incrementCounter } from "network/requests";
import { counterValueSelector, decrement, increment, incrementSuccess, incrementFailure, incrementRequest } from "./counter.slice";
import { ICounter } from "network/types";

// Handlers
export function* handleIncrement() {
  try {
    yield put(incrementRequest());

    let counterValue: number = yield select(counterValueSelector);
    counterValue++;
    const serverPayload: ICounter = {
      value: counterValue
    };

    const response: AxiosResponse = yield call(incrementCounter, serverPayload);
    const counterData = response.data;
    
    yield put(incrementSuccess(counterData.value));
  } catch (error) {
    console.log(error);
    yield put(incrementFailure(error));
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

    yield put(incrementSuccess(counterData.value));
  } catch (error) {
    console.log(error);
  }
}

// Watchers
export default function* counterSaga() {
  yield takeLatest(increment.type, handleIncrement)
  yield takeLatest(decrement.type, handleDecrement)
}