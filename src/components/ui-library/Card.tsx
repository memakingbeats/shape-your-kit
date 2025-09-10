import React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const cardVariants = cva(
  'rounded-lg transition-all duration-200',
  {
    variants: {
      variant: {
        default: 'bg-card text-card-foreground border border-border',
        elevated: 'bg-card text-card-foreground shadow-card hover:shadow-lg',
        gradient: 'bg-gradient-mesh text-card-foreground border border-border/50',
        ghost: 'bg-transparent hover:bg-card-hover',
        outline: 'border-2 border-primary bg-transparent',
      },
      padding: {
        none: 'p-0',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
      },
      interactive: {
        true: 'cursor-pointer hover:scale-[1.02] active:scale-[0.98]',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'md',
      interactive: false,
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, interactive, header, footer, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, padding, interactive, className }))}
        {...props}
      >
        {header && (
          <div className="border-b border-border pb-4 mb-4">
            {header}
          </div>
        )}
        {children}
        {footer && (
          <div className="border-t border-border pt-4 mt-4">
            {footer}
          </div>
        )}
      </div>
    );
  }
);

Card.displayName = 'Card';

export { Card, cardVariants };