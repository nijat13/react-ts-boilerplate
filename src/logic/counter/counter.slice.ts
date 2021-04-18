import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'setup/store';

export interface ICounterState {
  value: number
};

// Initial State
const initialState: ICounterState = {
  value: 0
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: () => {},
    decrement: () => {},
    setCount: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    }
  }
})

// Selectors
export const counterValueSelector = (state: RootState): number => state.counter.value;

// Action creators are generated for each case reducer function
export const { increment, decrement, setCount } = counterSlice.actions;

export default counterSlice.reducer;