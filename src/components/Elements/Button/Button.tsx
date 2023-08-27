import clsx from 'clsx';
import React from 'react';
import { Spinner } from '../Spinner/Spinner';

const variants = {
  primary: 'bg-blue-600 text-white',
  inverse: 'bg-white text-blue-600',
  danger: 'bg-red-600 text-white',
};

const sizes = {
  sm: 'py-2 px-4 text-sm',
  md: 'py-2 px-6 text-md',
  lg: 'py-3 px-8 text-lg',
};

type IconProps =
  | { startIcon: React.ReactNode; endIcon?: never }
  | { endIcon: React.ReactNode; startIcon?: never }
  | { endIcon?: undefined; startIcon?: undefined };

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  isLoading?: boolean;
} & IconProps;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { type, className, variant = 'primary', size = 'md', isLoading, startIcon, endIcon, ...props },
    ref
  ) => (
    <button
      ref={ref}
      type={type}
      className={clsx(
        'flex justify-center items-center border border-gray-300 disabled:opacity-70 disabled:cursor-not-allowed rounded-md shadow-sm font-medium focus:outline-none hover:opacity-80',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {isLoading && <Spinner size="sm" className="text-current" />}
      {!isLoading && startIcon}
      <span className="mx-2">{props.children}</span>
      {!isLoading && endIcon}
    </button>
  )
);
