import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

const AuthInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, autoComplete, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'w-full min-w-0 outline-none appearance-none transition duration-200 ps-4 pe-4 h-[3rem] border hover:border-gray-300 focus:border-primary-300 focus:shadow-focus relative rounded-[15px] mb-6 text-sm',
          className
        )}
        autoComplete={autoComplete ? autoComplete : 'off'}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
AuthInput.displayName = 'Input';

export { AuthInput, Input };
