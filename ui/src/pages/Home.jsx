import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Workflow from "../components/HowItWorks";

function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>

      <main className="relative">
        <Navbar />
        <main id="main-content">
          <section className="min-h-screen flex items-center">
            <div className="w-full">
              <Hero />
            </div>
          </section>

          <section className="min-h-screen flex items-center py-20 bg-neutral-50 dark:bg-neutral-900/50">
            <div className="w-full">
              <Features />
            </div>
          </section>

          <section className="min-h-screen flex items-center py-20">
            <div className="w-full">
              <Workflow />
            </div>
          </section>
        </main>
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;
