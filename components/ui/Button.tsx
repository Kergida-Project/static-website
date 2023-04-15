import { FC, ButtonHTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva("rounded-md font-medium transition-colors duration-250", {
  variants: {
    variant: {
      primary:
        "bg-black border text-white hover:invert hover:border-black",
      outlined: "bg-transparent text-black hover:border-2 hover:border-black",
    },
    size: {
      default: "px-4 py-2 text-base",
      large: "py-5 py-3 text-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size, variant, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };