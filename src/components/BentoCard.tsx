"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface BentoProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  colSpan?: "col-span-1" | "col-span-2" | "col-span-3"; // Enforce grid discipline
}

export const BentoCard = ({ children, className, title, colSpan = "col-span-1" }: BentoProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/20",
        colSpan,
        className
      )}
      onMouseMove={handleMouseMove}
    >
      {/* 1. The Spotlight Effect (Internal Glow) */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(16, 185, 129, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* 2. The Noise Texture (Premium Feel) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      {/* 3. Content */}
      <div className="relative z-20 flex h-full flex-col p-4 md:p-6">
        {title && (
          <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-text-secondary group-hover:text-primary transition-colors">
            {title}
          </h3>
        )}
        <div className="flex-1 text-card-foreground">
          {children}
        </div>
      </div>
    </div>
  );
};
