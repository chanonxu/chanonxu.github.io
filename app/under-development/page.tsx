import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Under Development | Vewish Labs",
};

const UnderDevelopmentPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-vewishblackblue px-6 py-24 text-center text-white">
      <span className="text-xs uppercase tracking-[0.35em] text-white/50">
        Heads up
      </span>
      <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
        This space is still under development.
      </h1>
      <p className="mt-6 max-w-2xl text-sm text-white/70 md:text-base">
        I&apos;m actively shaping the project showcase. Check back soon or drop me a
        message if you&apos;d like a preview of what&apos;s coming next.
      </p>
    </main>
  );
};

export default UnderDevelopmentPage;
