import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-5 py-3 text-sm font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[var(--primary)] text-[var(--primary-foreground)] shadow-[0_10px_30px_var(--primary-soft)] hover:bg-[var(--primary-strong)]",
        secondary:
          "border-[var(--border)] bg-[var(--muted)] text-[var(--foreground)] hover:border-[var(--border-strong)] hover:bg-white/8",
        ghost:
          "border-transparent bg-transparent text-[var(--muted-foreground)] hover:bg-white/5 hover:text-[var(--foreground)]"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant, ...props },
  ref
) {
  return <button className={cn(buttonVariants({ variant, className }))} ref={ref} {...props} />;
});
