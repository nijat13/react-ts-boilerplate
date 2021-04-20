import React, { MouseEventHandler } from 'react';

interface IProps {
  label?: string;
  text: string;
  disabled: boolean;
  children?: React.ReactChildren;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<IProps> = ({
  label,
  text,
  disabled,
  onClick,
  children
}) => {
  return (
    <button
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
    >
      {text || children}
    </button>
  );
};