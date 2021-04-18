import React from 'react';
import { useAppDispatch, useAppSelector } from 'setup/hooks';
import { decrement, increment } from 'logic/counter/counter.slice';
import { Button } from 'components/atoms';

export const Counter: React.FC = () => {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div>
      <div>
        <Button
          aria-label="Increment value"
          text="Increment"
          onClick={() => dispatch(increment())}
        />
        <span>{count}</span>
        <Button
          aria-label="Decrement value"
          text="Decrement"
          onClick={() => dispatch(decrement())}
        />
      </div>
    </div>
  )
}