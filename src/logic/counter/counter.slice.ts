import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'setup/store';

export interface ICounterState {
  value: number,
  loading: boolean,
  error: string | null
};

// Initial State
const initialState: ICounterState = {
  value: 0,
  loading: false,
  error: null
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // Increment
    increment() {},
    incrementRequest(state) {
      state.loading = true;
      state.error = null;
    },
    incrementSuccess(state, { payload }) {
      state.value = payload;
      state.loading = false;
    },
    incrementFailure(state, { payload }) {
      state.error = payload;
      state.loading = false;
    },
    // Decrement
    decrement: () => {}
  }
});


// Selectors
export const counterValueSelector = (state: RootState): number => state.counter.value;
export const counterLoadingSelector = (state: RootState): boolean => state.counter.loading;
export const counterErrorSelector = (state: RootState): string | null => state.counter.error;

// Action creators are generated for each case reducer function
export const {
  increment, incrementRequest, incrementSuccess, incrementFailure,
  decrement
} = counterSlice.actions;

export default counterSlice.reducer;