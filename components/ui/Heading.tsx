import { FC, LabelHTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva(
  "leading-tight lg:text-left tracking-tighter antialiased",
  {
    variants: {
      variant: {
        default: "font-extrabold text-black dark:text-white",
        main: "font-extrabold bg-gradient-to-b from-stone-700 to-stone-900 bg-clip-text text-transparent",
      },
      size: {
        default: "text-7xl",
        sm: "text-6xl",
      },
      lineHeight: {
        default: "leading-normal",
        tight: "leading-tight",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      lineHeight: "default",
    },
  }
);

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

const Heading: FC<HeadingProps> = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, size, variant, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        className={cn(headingVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Heading.displayName = "Heading";

export { Heading, headingVariants };
