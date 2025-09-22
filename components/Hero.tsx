"use client";

import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Link from "next/link";
import MagicButton from "./ui/magic-button";
import { BsSearchHeartFill } from "react-icons/bs";
import { Vortex } from "./ui/vortex";
import { BackgroundRippleEffect } from "./ui/background-ripple-effect";

const Hero = () => {
  return (
    <section className="relative left-1/2 flex h-screen w-screen -translate-x-1/2 items-center justify-center overflow-hidden">
      <Vortex
        backgroundColor="transparent"
        containerClassName="relative h-full w-full overflow-hidden"
        className="relative flex h-full w-full items-center justify-center px-6 text-center"
      >
        <BackgroundRippleEffect className="z-10" />

        <div className="relative z-20 flex flex-col items-center gap-6">
          <h2 className="uppercase tracking-[0.35em] text-xs text-white/70">
            Where Curiosity Meets Data and Development
          </h2>

          <TextGenerateEffect
            className="text-center text-[38px] text-white md:text-5xl lg:text-6xl"
            words="Welcome to Vewish Labs"
          />

          <p className="max-w-2xl text-sm italic text-white/80 md:text-lg lg:text-xl">
            Hi, I&apos;m Chanon — exploring data, engineering, and software to
            build thoughtful solutions and delightful experiences.
          </p>

          <Link href="/under-development" className="mt-2 inline-flex">
            <MagicButton
              title="My Projects"
              icon={<BsSearchHeartFill />}
              position="right"
            />
          </Link>
        </div>
      </Vortex>
    </section>
  );
};

export default Hero;
