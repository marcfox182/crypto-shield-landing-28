import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "subtle";
}

export const GlassCard = ({ children, className, variant = "default" }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10",
        variant === "default" 
          ? "glass backdrop-blur-xl"
          : "glass-subtle backdrop-blur-md",
        className
      )}
    >
      {children}
    </div>
  );
};