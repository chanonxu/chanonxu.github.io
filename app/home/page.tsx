import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";

const HomePage = () => {
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
};

export default HomePage;
