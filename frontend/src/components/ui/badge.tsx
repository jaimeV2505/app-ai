import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-primary/30 bg-primary/15 text-primary",
        secondary:
          "border-white/10 bg-white/5 text-muted-foreground",
        trending:
          "border-aurora-rose/30 bg-aurora-rose/10 text-aurora-rose",
        luxury:
          "border-aurora-violet/30 bg-aurora-violet/10 text-aurora-violet",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
