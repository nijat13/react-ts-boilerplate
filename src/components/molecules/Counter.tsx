import React from 'react';
import { useAppDispatch, useAppSelector } from 'setup/hooks';
import { counterLoadingSelector, counterValueSelector, decrement, increment } from 'logic/counter/counter.slice';
import { Button } from 'components/atoms';

export const Counter: React.FC = () => {
  const count = useAppSelector(counterValueSelector);
  const isLoading = useAppSelector(counterLoadingSelector);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>
        <Button
          aria-label="Increment value"
          text="Increment"
          disabled={isLoading}
          onClick={() => dispatch(increment())}
        />
        <span>{count}</span>
        <Button
          aria-label="Decrement value"
          text="Decrement"
          disabled={isLoading}
          onClick={() => dispatch(decrement())}
        />
      </div>
    </div>
  )
}