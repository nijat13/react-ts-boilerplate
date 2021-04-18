import React, { MouseEventHandler } from 'react';

interface IProps {
  label?: string;
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button = (props: IProps) => {
  return (
    <button
      aria-label={props.label}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};