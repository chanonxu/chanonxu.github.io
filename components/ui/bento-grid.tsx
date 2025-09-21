"use client";

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { InfiniteVerticalCards } from "./infinite-vertical-cards";
import RobotCatCanvas from "./robot-cat";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import MagicButton from "./magic-button";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-5 md:auto-rows-[10rem] md:grid-cols-12 lg:grid-cols-12",
        className
      )}
    >
      {children}
    </div>
  );
};
const techMarqueeItems = [
  "Power BI",
  "Power Automate",
  "Python",
  "SQL",
  "Tableau",
  "Looker Studio",
  "Snowflake",
];
export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("chanon.tag@gmail.com");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <div
      className={cn(
        "group/bento row-span-1 relative overflow-hidden flex flex-col justify-between space-y-4 rounded-xl",
        "border border-white/[0.1] transition duration-200",
        "hover:shadow-[0_15px_35px_-15px_color-mix(in_srgb,var(--color-vewishdarkblue)_70%,transparent)]",
        className
      )}
      style={{
        background: "#212A3E",
        backgroundColor:
          "linear-gradient(90deg,rgba(33, 42, 62, 1) 0%, rgba(82, 109, 130, 1) 50%, rgba(221, 230, 237, 1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover, object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={"object-cover, object-center w-full h-full"}
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold" />
          </BackgroundGradientAnimation>
        )}

        {id === 2 && (
          <RobotCatCanvas className="pointer-events-none absolute md:-bottom-6 lg:-bottom-10 2xl:-bottom-20 right-[-12%] h-[18rem] w-[18rem] z-0" />
        )}

        {/* Overlay the description so the flex column layout doesn’t push the title downward. */}
        <div
          className={cn(
            titleClassName,
            "pointer-events-none absolute inset-0 flex flex-col justify-end px-5 py-5 lg:py-10"
          )}
        >
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200 lg:text-xl max-w-96 z-10">
            {title}
          </div>

          {id === 5 && (
            <InfiniteVerticalCards
              items={techMarqueeItems}
              speed="normal"
              pauseOnHover
              className="pointer-events-none absolute -right-4 top-1/2 hidden h-40 w-50 -translate-y-1/2 lg:block"
              itemClassName="text-[0.65rem] lg:text-sm font-extralight"
            />
          )}

          {id === 6 && (
            <div className="mt-2 relative pointer-events-auto">
              <div className={`absolute -bottom-5 right-0`}>
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                />
              </div>
              <MagicButton
                title={copied ? "Email Copied" : "Copy Email"}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="!bg-[#161a31]"
                textClassName="normal-case !px-5 !py-3 text-[0.65rem] lg:text-xs tracking-[0.18em]"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
