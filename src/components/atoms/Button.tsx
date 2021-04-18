import React, { MouseEventHandler } from 'react';

interface IProps {
  label?: string;
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<IProps> = ({
  label,
  text,
  onClick
}) => {
  return (
    <button
      aria-label={label}
      onClick={onClick}
    >
      {text}
    </button>
  );
};