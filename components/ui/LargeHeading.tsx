import { FC, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const largeHeadingVariants = cva(
  "scroll-m-20 leading-tight lg:text-left tracking-tighter antialiased",
  {
    variants: {
      variant: {
        default: "font-extrabold text-foreground",
        main: "font-extrabold text-foreground",
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

interface LargeHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof largeHeadingVariants> {}

const LargeHeading: FC<LargeHeadingProps> = forwardRef<HTMLHeadingElement, LargeHeadingProps>(
  ({ className, size, variant, lineHeight, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        className={cn(largeHeadingVariants({ variant, size, lineHeight, className }))}
        {...props}
      />
    );
  }
);

LargeHeading.displayName = "Heading";

export { LargeHeading, largeHeadingVariants };
