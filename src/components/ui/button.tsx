import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:bg-neutral-04",
  {
    variants: {
      variant: {
        default: "bg-primary-01 text-neutral-01 shadow hover:bg-primary-01/90",
        destructive:
          "bg-primary-03 text-neutral-01 shadow-sm hover:bg-primary-03/90",
        outline:
          "border border-neutral-06 bg-neutral-08 shadow-sm hover:bg-neutral-07 hover:text-neutral-01",
        secondary:
          "bg-secondary-02 text-secondary-02 shadow-sm hover:bg-secondary-02/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    if (loading) {
      return (
        <Comp
          className={cn(
            buttonVariants({ variant, size, className }),
            "animate-pulse",
          )}
          ref={ref}
          {...props}
        >
          <DotsHorizontalIcon />
        </Comp>
      );
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
