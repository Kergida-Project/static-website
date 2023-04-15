import { FC, LabelHTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva("tracking-tighter antialiased", {
  variants: {
    variant: {
      default:
        "font-extrabold bg-gradient-to-t from-stone-800 to-stone-700 bg-clip-text text-transparent",
    },
    size: {
      default: "text-7xl h-20",
      sm: "text-6xl",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

interface HeadingProps
  extends LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof headingVariants> {}

const Heading: FC<HeadingProps> = forwardRef<HTMLLabelElement, HeadingProps>(
  ({ className, size, variant, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(headingVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Heading.displayName = "Heading";

export { Heading, headingVariants };
