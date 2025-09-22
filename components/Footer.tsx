import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";

import { socialMedia } from "@/data";
import MagicButton from "./ui/magic-button";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="relative w-full overflow-hidden bg-[color:var(--color-vewishblackblue)]"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/footer-grid.svg"
          alt="grid backdrop"
          fill
          priority
          className="object-cover opacity-30"
        />
      </div>
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 py-20 sm:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
            <span className="text-xs uppercase tracking-[0.4em] text-white/50">
              Get in touch
            </span>
            <h2 className="text-3xl font-semibold text-white md:text-4xl lg:text-[44px] lg:leading-[1.1]">
              Exploring and building data
            </h2>
            <p className="max-w-2xl text-sm text-white/70 md:text-base">
              I work on lightweight dashboards, automations, small project
              development. Share a brief and I&apos;ll reply with scope and a simple
              plan.
            </p>
            <a href="mailto:chanon.tag@gmail.com" className="inline-flex">
              <MagicButton
                title="Book time with me"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>

          <div className="grid gap-10 text-white/70 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start sm:justify-between sm:text-right lg:text-right">
            <div className="space-y-4 sm:col-start-2 sm:ml-auto sm:max-w-xs sm:self-end lg:ml-auto lg:self-end">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-white/60">
                Say hello
              </h3>
              <div className="space-y-3 text-sm sm:text-right">
                <a
                  href="mailto:chanon.tag@gmail.com"
                  className="block font-medium text-white transition-colors hover:text-white"
                >
                  chanon.tag@gmail.com
                </a>
                <p className="text-white/60">
                  Bangkok · Open to remote work
                  <br />I build simple things that solve specific problems
                  <br />
                  From data to building web app—still learning
                </p>
              </div>

              <div className="flex items-center gap-2 pt-2 sm:justify-end">
                {socialMedia.map(({ id, img, label, href }) => (
                  <a
                    key={id}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
                    aria-label={label}
                  >
                    <Image
                      src={img}
                      alt={label}
                      width={20}
                      height={20}
                      className="opacity-80 transition-opacity group-hover:opacity-100"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            Copyright © {year} Chanon Tangrattanasophon. All rights reserved.
          </p>
          <p className="text-white/40">
            Shipping small things while learning. Built with TypeScript ·
            Next.js · Tailwind · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
