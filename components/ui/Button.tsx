import { FC, ButtonHTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva("rounded-md font-medium transition duration-250", {
  variants: {
    variant: {
      primary: "bg-black border text-white hover:invert",
      outlined: "bg-transparent text-black border hover:border-black",
    },
    size: {
      default: "px-4 py-2 text-base",
      large: "py-5 py-3 text-lg",
    },
    shadow: {
      default: "shadow-none",
      sm: "shadow-sm",
      md: "shadow-md",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
    shadow: "default",
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
