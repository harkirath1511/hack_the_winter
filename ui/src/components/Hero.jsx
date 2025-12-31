import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { ArrowRight } from "lucide-react";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950">
      {/* Subtle decorative background circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-200 dark:bg-primary-900/20 rounded-full blur-3xl opacity-20 pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-cyan-200 dark:bg-cyan-900/20 rounded-full blur-3xl opacity-20 pointer-events-none" />

      <div className="relative z-10 container mx-auto max-w-5xl text-center">
        {/* Main heading */}
        <div className="mb-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-neutral-900 dark:text-white mb-6 leading-tight">
            Campaign Planning Made{" "}
            <span className="text-primary-600 dark:text-primary-400">
              Intelligent
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Create, plan, and execute your marketing campaigns in minutes with
            AI-powered assistance. No complexity. Just results.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            variant="primary"
            size="lg"
            onClick={() => navigate("/prompt")}
            className="gap-2"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button variant="secondary" size="lg">
            Learn More
          </Button>
        </div>

        {/* Stats or key features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 border-t border-neutral-200 dark:border-neutral-800">
          <div>
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
              100%
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 mt-2">
              AI Generated
            </p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
              &lt;5min
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 mt-2">
              Setup Time
            </p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
              ∞
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 mt-2">
              Possibilities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
