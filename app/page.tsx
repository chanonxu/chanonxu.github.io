import Hero from "../components/Hero";
import { FloatingNav } from "../components/ui/floating-navbar";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center bg-vewishblackblue">
      <div className="w-full px-5 sm:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <FloatingNav navItems={navItems} />
        </div>
      </div>

      <Hero />

      <div className="w-full px-5 sm:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <Grid />
        </div>
      </div>

      <Footer />
    </main>
  );
}
