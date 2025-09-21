"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

type InfiniteVerticalCardsProps = {
  items: string[];
  speed?: "fast" | "normal" | "slow";
  direction?: "up" | "down";
  pauseOnHover?: boolean;
  className?: string;
  itemClassName?: string;
};

export const InfiniteVerticalCards = ({
  items,
  speed = "normal",
  direction = "up",
  pauseOnHover = true,
  className,
  itemClassName,
}: InfiniteVerticalCardsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;

    const scroller = scrollerRef.current;
    const children = Array.from(scroller.children);

    // ทำสำเนา list ซ้ำเพื่อให้วนได้ตลอด
    children.forEach((child) => {
      const clone = child.cloneNode(true);
      scroller.appendChild(clone);
    });

    const duration =
      speed === "fast" ? "16s" : speed === "slow" ? "36s" : "24s";
    containerRef.current.style.setProperty(
      "--vertical-animation-duration",
      duration
    );
    containerRef.current.style.setProperty(
      "--vertical-animation-direction",
      direction === "up" ? "forwards" : "reverse"
    );
    setMounted(true);
  }, [items, speed, direction]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-full flex-col gap-3 py-2",
          mounted && "animate-vertical-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, index) => (
          <li
            key={`${item}-${index}`}
            className={cn(
              "rounded-xl bg-[rgba(82,109,130,0.22)] px-4 py-2 text-center text-xs font-medium text-white/90 shadow-sm shadow-black/20",
              itemClassName
            )}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
