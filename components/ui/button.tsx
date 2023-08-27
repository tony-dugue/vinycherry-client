import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center appearance-none select-none relative rounded-md text-sm font-medium whitespace-nowrap align-middle outline-none ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',

  {
    variants: {
      variant: {
        default:
          'rounded-[35px] font-semibold min-w-[2.5rem] text-xs text-white bg-gradient-to-br from-primary-300 to-primary-500 hover:from-primary-300 hover:to-primary-400',
        secondary:
          'rounded-[35px] font-semibold transition duration-200 min-w-[2.5rem] text-xs bg-white text-gray-700 hover:bg-primary-100',
        submit:
          'rounded-[15px] text-[10px] bg-primary-400 w-full my-5 text-white hover:bg-primary-300 active:bg-primary-500 rounded-[15px] font-semibold transition duration-200 min-w-[2.5rem] ps-[1rem] pe-[1rem]',
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2 ps-[30px] pe-[30px]',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
