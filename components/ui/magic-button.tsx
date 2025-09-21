import React from "react";
import { cn } from "@/lib/utils";

type MagicButtonProps = {
  title: string;
  icon?: React.ReactNode;
  position?: "left" | "right";
  handleClick?: () => void;
  otherClasses?: string;
  textClassName?: string;
};

const MagicButton = ({
  title,
  icon,
  position = "right",
  handleClick,
  otherClasses,
  textClassName,
}: MagicButtonProps) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-2xl px-[0.2rem] py-[0.2rem] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-vewishdarkblue)]",
        otherClasses
      )}
    >
      {/* Spinning halo */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl bg-[conic-gradient(from_180deg_at_50%_50%,#FF9494_0%,#A6B1E1_25%,#52057B_50%,#A6B1E1_75%,#FF9494_100%)] opacity-70 blur-lg transition duration-500 group-hover:opacity-100 group-hover:blur-md animate-[spin_8s_linear_infinite]"
      />
      {/* Inner glass panel of the button */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-[2px] rounded-[0.9rem] bg-[color:var(--color-vewishdarkblue)] ring-1 ring-white/15 backdrop-blur-md transition-colors duration-500 group-hover:bg-zinc-900/70"
      />
      {/* Sweeping highlight */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-[-40%] top-1/2 h-[160%] w-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 blur-xl transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100"
      />
      <span
        className={cn(
          "relative z-10 flex items-center gap-2 px-7 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white drop-shadow-md",
          textClassName
        )}
      >
        {position === "left" && icon}
        <span>{title}</span>
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
